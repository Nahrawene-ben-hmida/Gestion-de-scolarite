import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Etudiant} from "../etudiant/etudiant.component";
import {EnseignantService} from "../services/enseignant.service";
import {ClassService} from "../services/class.service";
import {MatiereService} from "../services/matiere.service";
import {EnseignantIdClassService} from "../services/enseignant-id-class.service";
export interface Enseignant {
  id:string,
  nom: string,
  prenom: string,
  adresse: string,
  telephone: string,
  matiere: string
}

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  enseignants: any;
  enseignant: FormGroup;
  classes: any;
  matieres: any;
  submitted = false;
  focus;
  message;
  show = false;
  type ;
  displayedColumns: string[] = ['id', 'Nom', 'Prenom','Adresse','Telephone','Matiere','Classes','Supprimer','Modifier'];
  dataSource: MatTableDataSource<Enseignant>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      private enseignantService: EnseignantService,
      private formBuilder: FormBuilder,
      private matiereService: MatiereService,
      private classService: ClassService,
      private enseignantIdClassService: EnseignantIdClassService
  ) { }

  ngOnInit() {
    this.classService.getAllClasses().subscribe(classes =>{
      this.classes = classes._embedded.classes;
      console.log("classes",this.classes)
    })
    this.matiereService.getAllMatieres().subscribe(matieres =>{
      this.matieres = matieres._embedded.matieres;
    })
    this.enseignant = this.formBuilder.group({
      nom:['',Validators.required],
      prenom: ['',Validators.required],
      adresse: ['',Validators.required],
      telephone: ['',Validators.required],
      idClass: ['',Validators.required],
      idMatiere: ['',Validators.required]
    })
  }
  setEnseignant(){
    this.enseignantService.getAllEnseignants().subscribe(enseignants => {
      this.enseignants = enseignants._embedded.enseignants;
      console.log("enseignants",this.enseignants)
      for(let enseig of this.enseignants){
        this.matiereService.getMatiereById(enseig.idMatiere).subscribe(matiere=>{
          let mat:any;
          mat = matiere;
          console.log("matiere:" , mat.matiere);
          enseig["matiere"] = mat.matiere;
        })
        this.enseignantService.getClasses(enseig.id).subscribe(clas =>{
          console.log(clas);
          let classes :any;classes =   clas;
          let strClasses = '';
          for(let cla of classes._embedded.enseignantIdClasses){
            console.log("classe :", cla);
            strClasses += cla.nom_class+" ";
          }
          console.log(strClasses);
          enseig["classes"] = strClasses;

        })
      }
      this.dataSource = new MatTableDataSource<Enseignant>(this.enseignants);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  get f() {return this.enseignant.controls;}
  ngAfterViewInit() {
    this.setEnseignant();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onSubmit() {
    this.submitted = true;
    if(this.enseignant.invalid){
      return;
    }
    this.enseignant.value["enseignantIdClasses"] = [];

    this.enseignant.value.idClass.forEach(idClass => {
      this.enseignant.value["enseignantIdClasses"].push("http://localhost:8762/service-enseignant/enseignantIdClasses/"+idClass)
    })
    console.log("value",this.enseignant.value)


    this.enseignantService.ajouteEnseignant(
      this.enseignant.value
    ).subscribe(enseignant =>{
      console.log("enseiignant",enseignant)
      // for(let cl of this.enseignant.value.idClass){
      //   console.log(cl);
      //   this.enseignantIdClassService.ajouteEnseignantIdClass({nom_class:cl}).subscribe(enseiIdClass=>{
      //     console.log(enseiIdClass.id,enseignant.id);
      //     console.log("nom class ", enseiIdClass.nom_class);
      //     this.enseignantIdClassService.ajouteEnseignant(enseiIdClass.id,enseignant.id).subscribe(res=>{
      //       console.log(res);
      //       console.log(enseiIdClass.nom_class);
      //       console.log(enseignant);
      //
      //       this.setEnseignant();
      //       this.submitted = false;
      //       this.enseignant.reset({
      //         idClass:"",
      //         idMatiere:""
      //
      //       });
      //     })
      //   })
      // }

    })


  }
  supprimer(id){
    this.enseignantService.deleteEnseignant(id).subscribe(()=>{
      this.setEnseignant();
    })
  }
  modifier(id){
    this.enseignantService.getEnseignantById(id).subscribe(enseignant=>{
      this.enseignantService.getClasses(enseignant.id).subscribe(cla=>{
        let classes :any;
        classes = cla;
        let index = 0
        console.log(cla);
        if(classes._embedded.enseignantIdClasses.length == 0){
          this.enseignant = this.formBuilder.group({
            id:[enseignant.id,Validators.required],
            nom:[enseignant.nom,Validators.required],
            prenom: [enseignant.prenom,Validators.required],
            adresse: [enseignant.addresse,Validators.required],
            telephone: [enseignant.telephone,Validators.required],
            idClass: ['',Validators.required],
            idMatiere: [enseignant.idMatiere,Validators.required]
          })
        }
        for(let classe of classes._embedded.enseignantIdClasses){
          console.log(classe);
          this.enseignantIdClassService.deleteEnseignant(classe.id,enseignant.id).subscribe(()=>{
            index++;
            if(index == classes._embedded.enseignantIdClasses.length){
              console.log(index);
              this.enseignant = this.formBuilder.group({
                id:[enseignant.id,Validators.required],
                nom:[enseignant.nom,Validators.required],
                prenom: [enseignant.prenom,Validators.required],
                adresse: [enseignant.adresse,Validators.required],
                telephone: [enseignant.telephone,Validators.required],
                idClass: ['',Validators.required],
                idMatiere: [enseignant.idMatiere,Validators.required]
              })
            }
          })
        }
      })
    })
  }
}

