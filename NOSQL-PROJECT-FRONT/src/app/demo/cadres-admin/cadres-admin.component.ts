import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Etudiant} from "../etudiant/etudiant.component";
import {CadresAdminService} from "../services/cadres-admin.service";
export interface CadresAdmin{
  id: string,
  nom: string,
  prenom: string,
  adresse: string,
  telephone: number
}

@Component({
  selector: 'app-cadres-admin',
  templateUrl: './cadres-admin.component.html',
  styleUrls: ['./cadres-admin.component.scss']
})
export class CadresAdminComponent implements OnInit {
  cadresAdmins: any;
  cadresAdmin: FormGroup;
  submitted = false;
  focus;
  message;
  show = false;
  type ;
  displayedColumns: string[] = ['id', 'Nom', 'Prenom','Adresse','Telephone','Supprimer','Modifier'];
  dataSource: MatTableDataSource<CadresAdmin>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      private cadresAdminService: CadresAdminService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cadresAdmin = this.formBuilder.group({
      nom:['',Validators.required],
      prenom: ['',Validators.required],
      adresse: ['',Validators.required],
      telephone: ['',Validators.required]
    })
  }
  setCadresAdmin() {
    this.cadresAdminService.getAllCadreAdmins().subscribe(cadresAdmins =>{
      this.cadresAdmins = cadresAdmins._embedded.cadreAdmins;
      this.dataSource = new MatTableDataSource<Etudiant>(this.cadresAdmins);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  get f() { return this.cadresAdmin.controls;}
  ngAfterViewInit() {
    this.setCadresAdmin();
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
    if(this.cadresAdmin.invalid){
      return;
    }
    this.cadresAdminService.ajouteCadreAdmin(this.cadresAdmin.value)
        .subscribe(etudiant =>{
      this.setCadresAdmin();
      this.submitted = false;
      this.cadresAdmin.reset();
    })


  }
  supprimer(id){
    console.log(id);
    this.cadresAdminService.deleteCadreAdmin(id).subscribe(()=>{
            this.message = "Suppression réussie";
            this.type = "success";
            this.show = true;
            this.setCadresAdmin();
    })
  }
  modifier(id){
    this.cadresAdminService.getCadreAdminById(id).subscribe(cadresAdmin=>{
      this.cadresAdmin = this.formBuilder.group({
        nom:[cadresAdmin.nom,Validators.required],
        prenom: [cadresAdmin.prenom,Validators.required],
        adresse: [cadresAdmin.adresse,Validators.required],
        telephone: [cadresAdmin.telephone,Validators.required],
        id:[cadresAdmin.id,Validators.required]
      })
    })

  }
}
