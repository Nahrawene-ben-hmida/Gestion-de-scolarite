import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {
  url = environment.proxyServiceEtudiant+"/absences"
  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllAbsences():Observable<any> {
    return this.httpClient.get(this.url);
  }
  getAbsenceById(absenceId):Observable<any>{
    return this.httpClient.get<any>(this.url+'/'+absenceId);
  }
  getAbsenceByDateAndMatiere(date,matiere):Observable<any>{
    return this.httpClient.get<any>(this.url+'?date_absence='+date+'&&matiereAbsence='+matiere);
  }
  ajouteAbsence(absence):Observable<any>{
    return this.httpClient.post(this.url,absence);
  }
  updateAbsence(absence){
    return this.httpClient.put(this.url+"/"+absence.id,absence);
  }
  deleteAbsence(id){
    return this.httpClient.delete(this.url+'/'+id);
  }
  newHeader = {
    headers: new HttpHeaders ({
      'Content-Type':  'text/uri-list',
      'Accept':'text/uri-list'
    })
  };
  ajouteMatiere(idAbsence,idMatiere){
    return this.httpClient.put(this.url+"/"+idAbsence+"/matiereAbsence","http://localhost:8081/matieres/"+idMatiere,this.newHeader);
  }
  ajouteEtudiant(idAbsence,idEtudiant){
    return this.httpClient.put(this.url+"/"+idAbsence+"/etudiantAbsence","http://localhost:8081/etudiants/"+idEtudiant,this.newHeader);
  }
  getAbsenceByDateAbsenceAndEtudiantIdAndMatiereId(dateAbsence,etudiantId,matiereId):Observable<any>{
    return this.httpClient.get(this.url+"/search/findByDateAbsenceAndEtudiantAbsenceIdAndMatiereAbsenceId?dateAbsence="+dateAbsence+"&&etudiantAbsence="+etudiantId+"&&matiereAbsence="+matiereId);
  }
  countAbsencesByEtatAndMatiereAbsenceIdAndEtudiantAbsenceId(etat,matiereId,etudiantId){
    return this.httpClient.get(this.url+'/search/countAbsencesByEtatAndMatiereAbsenceIdAndEtudiantAbsenceId?etat='+etat+'&&matiereId='+matiereId+'&&etudiantId='+etudiantId);
  }
  countAllAbsencesByMatiereIdAndEtudiantId(matiereId,etudiantId){
    return this.httpClient.get(this.url+'/search/countAllAbsencesByEtudiantIdAndMatiereId?etudiantId='+etudiantId+'&&matiereId='+matiereId);
  }
  getAllAbsencesByIdEtudiant(idEtudiant){
    return this.httpClient.get(this.url+'/search/findAllByEtudiantAbsenceId?etudiantId='+idEtudiant);
  }
}
