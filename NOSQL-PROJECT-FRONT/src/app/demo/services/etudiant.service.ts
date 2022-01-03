import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url = environment.proxyServiceEtudiant+"/etudiants";
  constructor(
      protected httpClient : HttpClient
  ) { }
  getAllEtudiants(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getEtudiantById(etudiantId: Number) {
    return this.httpClient.get<any>(this.url+'/'+etudiantId);
  }
  ajouteEtudiant(etudiant):Observable<any> {
    return this.httpClient.post(this.url,etudiant);
  }
  deleteEtudiant(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
  updateResultat(etudiant){
    return this.httpClient.put(this.url+'/'+etudiant.id,etudiant);
  }
  newHeader = {
    headers: new HttpHeaders ({
      'Content-Type':  'text/uri-list',
      'Accept':'text/uri-list'
    })
  };
  getClass(idEtudiant){
    return this.httpClient.get(this.url+"/"+idEtudiant+"/classEtudiant")
  }
  getSession(idEtudiant){
    return this.httpClient.get(this.url+"/"+idEtudiant+"/sessionEtudiant")
  }
  ajouteClass(idEtudiant,idClass){
    return this.httpClient.put(this.url+"/"+idEtudiant+"/classEtudiant",environment.proxyServiceEtudiant+"/classes/"+idClass,this.newHeader)
  }
  ajouteSession(idEtudiant,idSession){
    return this.httpClient.put(this.url+"/"+idEtudiant+"/sessionEtudiant",environment.proxyServiceEtudiant+"/sessions/"+idSession,this.newHeader);
  }
  countEtudiantsBySessionEtudiantId(idSession):Observable<any>{
    return this.httpClient.get(this.url+"/search/countEtudiantsBySessionEtudiantId?idSession="+idSession);
  }
  countEtudiantsByResultatAndSessionId(resultat,sessionId){
    return this.httpClient.get(this.url+'/search/countEtudiantsByResultatAndSessionEtudiantId?resultat='+resultat+'&&sessionId='+sessionId);
  }
  countEtudiantsByResultatAndSessionEtudiantIdAndClassEtudiantId(resultat,sessionId,classId){
    return this.httpClient.get(this.url+'/search/countEtudiantsByResultatAndSessionEtudiantIdAndClassEtudiantId?resultat='+resultat+'&&sessionId='+sessionId+'&&classId='+classId);
  }
  getAllEtudiantsBySessionId(sessionId){
    return this.httpClient.get(this.url+'/search/findBySessionEtudiantId?sessionId='+sessionId);
  }
}
