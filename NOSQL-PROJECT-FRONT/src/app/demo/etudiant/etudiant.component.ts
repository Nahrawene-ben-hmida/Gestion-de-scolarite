import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, NgModel, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Class} from "../gestion-scolarite/class/class.component";
import {EtudiantService} from "../services/etudiant.service";
import {ClassService} from "../services/class.service";
import {formatDate} from "@angular/common";
import {SectionService} from "../services/section.service";
import {AbsencesService} from "../services/absences.service";
import {MatiereService} from "../services/matiere.service";
import {Session} from "../gestion-scolarite/session/session.component";
import {SessionService} from "../services/session.service";
export interface Etudiant {
  id: string,
  nom: string,
  prenom: string,
  adresse: string,
  telephone: number,
  resultat:string,
  class:{
    id:string,
    class:string
  }
}

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  @ViewChild("absenceC",{static:false}) absenceComponent;
  etudiants: any;
  etudiant: FormGroup;
  matiereAbsence: any;
  idEtudiant;
  idSection;
  etudiantMatieres : any;
  selectedDate:any;
  classes: any;
  sessions:any;
  submitted = false;
  focus;
  message;
  show = false;
  type ;
  displayedColumns: string[] = ['id', 'Nom', 'Prenom','Adresse','Telephone','Class','Session','Resultat','Absence','Supprimer','Modifier'];
  dataSource: MatTableDataSource<Etudiant>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
      private etudiantService: EtudiantService,
      private formBuilder: FormBuilder,
      private classService: ClassService,
      private sectionService: SectionService,
      private absencesService: AbsencesService,
      private matiereService: MatiereService,
      private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.classService.getAllClasses().subscribe(classes=>{
      this.classes = classes._embedded.classes;
      console.log(this.classes);

    })
    this.sessionService.getAllSession().subscribe(sessions=>{
      this.sessions = sessions._embedded.sessions;
    })
    this.etudiant = this.formBuilder.group({
      nom:['',Validators.required],
      prenom: ['',Validators.required],
      adresse: ['',Validators.required],
      telephone: ['',Validators.required],
      idClass: ['',Validators.required],
      idSession:['',Validators.required],
      resultat: ['nonAffectee']
    })
    this.matiereAbsence = new FormArray([]);

  }
  createMatiereAbsence(matiere,status,idAbsence){
    return new FormGroup({
      matiere: new FormControl(matiere),
      status: new FormControl(status),
      id:new FormControl(idAbsence)
    })
  }

  setEtudiants(){
    this.etudiantService.getAllEtudiants().subscribe(etudiants=>{
      this.etudiants = etudiants._embedded.etudiants;
      for(let etud of this.etudiants){
        this.etudiantService.getClass(etud.id).subscribe(cla=>{
          let cl: any;
          cl = cla;
          etud["class"] = cl.nom_class;
        })
        this.etudiantService.getSession(etud.id).subscribe(sess=>{
          let se : any;
          se = sess;
          etud["session"] = se.anneeScolaire;
        })
      }
      console.log(this.etudiants);
      this.dataSource = new MatTableDataSource<Etudiant>(this.etudiants);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  get f() { return this.etudiant.controls;}
  ngAfterViewInit() {
    this.setEtudiants()
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
    if(this.etudiant.invalid){
      return;
    }
    if(!this.etudiant.value.id){
      this.etudiant.value['resultat'] = 'nonAffectee';
    }
      this.etudiantService.ajouteEtudiant(this.etudiant.value).subscribe(etudiant =>{
        this.etudiantService.ajouteClass(etudiant.id,this.etudiant.value.idClass).subscribe(etud=>{
          this.etudiantService.ajouteSession(etudiant.id,this.etudiant.value.idSession).subscribe(res=>{
            this.setEtudiants();
            this.submitted = false;
            this.etudiant.reset({
              idClass: "",
              idSession: ""
            });
          })

        })
      })
  }
  absence(id){
    this.idEtudiant = id;
    this.etudiantService.getClass(id).subscribe(etudClass=>{
      let etudiantClass :any;
      etudiantClass = etudClass;
      this.classService.getSection(etudiantClass.id).subscribe(section=>{
        let etudSection : any;
        etudSection = section;
        this.idSection = etudSection.id;
      })
    })
    this.absenceComponent.show();

  }
  pickedDate(date){
    console.log(date);
    this.matiereService.getMatiereBySectionId(this.idSection).subscribe(matieres=>{
      let mat:any;
      mat= matieres;
      this.etudiantMatieres = mat._embedded.matieres;
      console.log(this.etudiantMatieres);
      this.matiereAbsence = new FormArray([]);
      this.selectedDate = formatDate(date,"yyyy-MM-dd","en-GB");
      for(let i=0;i<this.etudiantMatieres.length;i++){
        let status = "null";
        let idAbsence = "null";
        let test = true;
        this.absencesService.getAbsenceByDateAbsenceAndEtudiantIdAndMatiereId(this.selectedDate,this.idEtudiant,this.etudiantMatieres[i].id).subscribe(absence=>{
          test = false;
          console.log("matiereAbsence!!!",absence);
          let abs :any;
          abs=absence;

          if(abs._embedded.absences.length != 0){
            status = abs._embedded.absences[0].etat;
            idAbsence = abs._embedded.absences[0].id;
            console.log(this.matiereAbsence)
          }
          this.matiereAbsence.push(this.createMatiereAbsence(this.etudiantMatieres[i].id,status,idAbsence))
          this.etudiantMatieres[i]["status"] =status;

        },error => {console.log("error",error)},() =>{
          if(test == true){
            console.log(1);
            this.matiereAbsence.push(this.createMatiereAbsence(this.etudiantMatieres[i].id,status,idAbsence))
            this.etudiantMatieres[i]["status"] =status;
          }
        })
      }
      console.log("matiereAbsence",this.matiereAbsence)

      console.log(this.etudiantMatieres)
    })

  }
  matiereAbsenceSubmit(){
    for(let matAbsen of this.matiereAbsence.value){
      if(matAbsen.id == "null") {
        this.absencesService.ajouteAbsence({
          etat: matAbsen.status,
          dateAbsence: this.selectedDate,
          idEtudiant: this.idEtudiant
        }).subscribe(matiereAbsence => {
          this.absencesService.ajouteEtudiant(matiereAbsence.id, this.idEtudiant).subscribe(() => {
            this.absencesService.ajouteMatiere(matiereAbsence.id, matAbsen.matiere).subscribe(() => {
              this.absenceHide();
            })
          })
        })
      }else{
        this.absencesService.updateAbsence({
          etat: matAbsen.status,
          id:matAbsen.id,
          dateAbsence: this.selectedDate,
          idEtudiant: this.idEtudiant
        }).subscribe(matiereAbsence => {
              this.absenceHide();
            })
      }
    }
  }
  resultChanged(result,idEtudiant){
    this.etudiantService.getEtudiantById(idEtudiant).subscribe(etudiant=>{
      etudiant.resultat = result;
      this.etudiantService.updateResultat(etudiant).subscribe(updated=>{
        this.setEtudiants();
      })
    })

  }
  absenceHide(){
    this.absenceComponent.hide();
  }
  supprimer(id){
    this.absencesService.getAllAbsencesByIdEtudiant(id).subscribe(absences=>{
      let abs:any;
      abs = absences;
      let index = 0;
      if(abs._embedded.absences.length == 0){
        this.etudiantService.deleteEtudiant(id).subscribe(del=>{
          this.setEtudiants();
        })
      }
      for(let a of abs._embedded.absences){
        this.absencesService.deleteAbsence(a.id).subscribe(()=>{
          index++;
          if(index== abs._embedded.absences.length){
            this.etudiantService.deleteEtudiant(id).subscribe(del=>{
              this.setEtudiants();
            })
          }
        })
      }
    })

  }
  modifier(id){
    this.etudiantService.getEtudiantById(id).subscribe(etudiant=>{
      this.etudiantService.getSession(id).subscribe(session=>{
        this.etudiantService.getClass(id).subscribe(classe=>{
          let cla : any;
          cla = classe;
          let se : any;
          se = session;
          this.etudiant = this.formBuilder.group({
            id:[etudiant.id,Validators.required],
            nom:[etudiant.nom,Validators.required],
            prenom: [etudiant.prenom,Validators.required],
            adresse: [etudiant.adresse,Validators.required],
            telephone: [etudiant.telephone,Validators.required],
            idClass: [cla.id,Validators.required],
            idSession:[se.id,Validators.required],
            resultat: [etudiant.resultat,Validators.required]
          })
        })
      })
    })
  }
}
