import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ClassService} from "../../services/class.service";
import {SectionService} from "../../services/section.service";
export interface Class {
  id: string,
  nom_class:string,
  section: {
    id:string,
    section:string
  }

}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  classes: any;
  class: FormGroup;
  sections: any;
  submitted = false;
  focus;
  message;
  show = false;
  type ;
  displayedColumns: string[] = ['id', 'Class', 'Section','Modifier'];
  dataSource: MatTableDataSource<Class>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      private classService: ClassService,
      private formBuilder: FormBuilder,
      private sectionService: SectionService
  ) { }

  ngOnInit() {
    this.sectionService.getAllSections().subscribe(sections =>{
      this.sections = sections._embedded.sections;

    })
    this.class = this.formBuilder.group({
      nom_class: ['',Validators.required],
      idSection: ['',Validators.required]
    })
  }
  setClasses(){
    this.classService.getAllClasses().subscribe(classes=>{
      console.log("classes",classes)
      this.classes = classes._embedded.classes;
      for(let cl of this.classes){
        this.classService.getSection(cl.id).subscribe(section=>{
          let sec: any;
          sec = section;
          cl["section"] = sec.section;
        })
      }
      this.dataSource = new MatTableDataSource<Class>(this.classes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  get f() {return this.class.controls;}
  ngAfterViewInit(){
    this.setClasses();
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
    if(this.class.invalid){
      return;
    }
    console.log(this.class.value);
    this.classService.ajouteClass( this.class.value).subscribe(cla => {
      this.classService.ajouteSection(cla.id,this.class.value.idSection).subscribe(c=>{
        this.setClasses();
        this.submitted = false;
        this.class.reset({
          idSection:""
        });
      })
    })
  }
  modifier(id){
    console.log(id);
    this.classService.getClassById(id).subscribe(cla=>{
      this.classService.getSection(id).subscribe(section=>{
        let sec:any;
        sec= section;
        this.class = this.formBuilder.group({
          nom_class: [cla.nom_class,Validators.required],
          idSection: [sec.id,Validators.required],
          id:[cla.id,Validators.required]
        })
      })
    })
  }

}
