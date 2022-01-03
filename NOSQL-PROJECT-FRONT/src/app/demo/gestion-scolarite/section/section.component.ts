import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

import {Matiere} from "../matiere/matiere.component";
import {SectionService} from "../../services/section.service";
import {MatiereService} from "../../services/matiere.service";
export interface Section {
  id: string,
  section: string,
}


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  sections: any;
  section: FormGroup;
  matieres: any;
  submitted = false;
  focus;
  message;
  show = false;
  type ;
  displayedColumns: string[] = ['id', 'Section','Matieres','Modifier'];
  dataSource: MatTableDataSource<Section>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      private sectionService: SectionService,
      private formBuilder: FormBuilder,
      private matiereService: MatiereService
  ) { }

  ngOnInit() {
    this.matiereService.getAllMatieres().subscribe(matieres=>{
      this.matieres = matieres._embedded.matieres;
    })
    this.section = this.formBuilder.group({
      section: ['',Validators.required],
      idMatieres: ['',Validators.required]
    })
  }
  ngAfterViewInit(){
    this.setSections();
  }
  setSections(){
    this.sectionService.getAllSections().subscribe(sections=>{
      this.sections = sections._embedded.sections;
      console.log(this.section);
      for(let sec of this.sections){
        this.sectionService.getMatieres(sec.id).subscribe(mats=>{
          let matis: any;
          matis = mats;
          console.log("matis",matis)
          let strMatieres = '';
          for(let mat of matis._embedded.matieres){
            strMatieres+=mat.matiere + " ";
          }
          sec["matieres"] = strMatieres;
        })

      }
      this.dataSource = new MatTableDataSource<Section>(this.sections);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  get f() {
    return this.section.controls;
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
    if(this.section.invalid){
      return;
    }
    this.section.value["matiereSection"] = [];

    this.section.value.idMatieres.forEach(idMatiere => {
      this.section.value["matiereSection"].push("http://localhost:8762/service-etudiant/matieres/"+idMatiere)
    })
    console.log("value",this.section.value)
    this.sectionService.ajouteSection(this.section.value).subscribe(section => {
      console.log("section",section)
      this.setSections();
      this.submitted = false;
      this.section.reset();
    })
  }
  modifier(id){
    this.sectionService.getSectionById(id).subscribe(sec=>{
      console.log(sec)
      this.sectionService.getMatieres(sec.id).subscribe(mat=>{
        let matieres:any;
        matieres = mat;
        console.log(mat)
        let index=0;
        if(matieres._embedded.matieres.length == 0){
          this.section = this.formBuilder.group({
            section:[sec.section,Validators.required],
            id:[sec.id,Validators.required],
            idMatieres:['',Validators.required]
          })
        }
        for(let matiere of matieres._embedded.matieres){
          this.sectionService.deleteMatiere(sec.id,matiere.id).subscribe(()=>{
            index++;
            if(index == matieres._embedded.matieres.length){
              this.section = this.formBuilder.group({
                section:[sec.section,Validators.required],
                id:[sec.id,Validators.required],
                idMatieres:['',Validators.required]
              })
            }
          })
        }
      })
    })
  }

}
