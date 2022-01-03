import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Matiere} from "../matiere/matiere.component";
import {SessionService} from "../../services/session.service";
export interface Session {
  id: string,
      anneeScolaire: string
}
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  session: FormGroup;
  submitted = false;
  sessions: Session[];
  focus;
  message;
  show = false;
  type;
  displayedColumns: string[] = ['id', 'Session','Modifier'];
  dataSource: MatTableDataSource<Session>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
      private formBuilder: FormBuilder,
      private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.session = this.formBuilder.group({
      anneeScolaire:['',Validators.required]
    })
  }
  setSession(){
    this.sessionService.getAllSession().subscribe(sessions=>{
      this.sessions = sessions._embedded.sessions;
      this.dataSource = new MatTableDataSource(this.sessions );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngAfterViewInit() {
    this.setSession();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  get f() {return this.session.controls;}
  onSubmit(){
    this.submitted = true;
    if(this.session.invalid){
      return;
    }
    this.sessionService.ajouteSession(this.session.value).subscribe(session => {
      console.log(session);
      this.submitted = false;
      this.setSession();
      this.session.reset();
    })
  }
  modifier(id){
    console.log(id);
    this.sessionService.getSessionById(id).subscribe(session=>{
      let se:any;
      se = session;
      this.session = this.formBuilder.group(se)
      console.log(this.session)
    })
  }
}
