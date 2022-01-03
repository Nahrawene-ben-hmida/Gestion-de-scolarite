import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatiereService} from "../../services/matiere.service";
export interface Matiere {
  id: string,
  matiere: string
}

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
  matiere: FormGroup;
  submitted = false;
  matieres: Matiere[];
  focus;
  message;
  show = false;
  type;
  displayedColumns: string[] = ['id', 'Matiere', 'Modifier'];
  dataSource: MatTableDataSource<Matiere>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
      private formBuilder: FormBuilder,
      private matiereService: MatiereService,
  ) { }

  ngOnInit() {
    this.matiere = this.formBuilder.group({
      matiere: ['',Validators.required]
    })
  }
  setMatieres(){
    this.matiereService.getAllMatieres().subscribe(matieres => {
      console.log(matieres)
      matieres._embedded.matieres.map(mat => delete mat._links);
      this.matieres = matieres._embedded.matieres;
      console.log("matieres:",this.matieres)
      this.dataSource = new MatTableDataSource(this.matieres  );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
    ngAfterViewInit() {
      this.setMatieres();
    }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  get f() {return this.matiere.controls;}
  onSubmit(){
    this.submitted = true;
    if(this.matiere.invalid){
      return;
    }
    this.matiereService.ajouteMatiere(this.matiere.value).subscribe(categorie => {
      this.submitted = false;
      this.setMatieres();
      this.matiere.reset();
    })
  }
  modifier(id){
    this.matiereService.getMatiereById(id).subscribe(matiere=>{
      this.matiere = this.formBuilder.group(matiere);
    })
  }
}
