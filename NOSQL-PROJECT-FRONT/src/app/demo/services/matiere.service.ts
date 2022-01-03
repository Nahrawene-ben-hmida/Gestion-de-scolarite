import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  url  = environment.proxyServiceEtudiant+"/matieres"
  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllMatieres(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getMatiereById(matiereId: Number) {
    return this.httpClient.get<any>(this.url+'/'+matiereId);
  }
  ajouteMatiere(matiere):Observable<any> {
    return this.httpClient.post(this.url,matiere);
  }
  deleteMatiere(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
  newHeader = {
    headers: new HttpHeaders ({
      'Content-Type':  'text/uri-list',
      'Accept':'text/uri-list'
    })
  };

  // test(){
  //   return this.httpClient.post("http://localhost:8082/sections/1/matiereSection","http://localhost:8082/matieres/4",this.newHeader)
  // }
  ajouteSection(idMatiere,idSection){
    return this.httpClient.put(this.url+"/"+idMatiere+"/sections",environment.proxyServiceEtudiant+"/sections/"+idSection,this.newHeader);
  }
  getMatiereBySectionId(idSection){
    return this.httpClient.get(this.url+"/search/findAllBySectionsId?sectionId="+idSection);
  }
  countAllMatieres(){
    return this.httpClient.get(this.url+'/search/countAllMatieres')
  }
  deleteSectionById(idSection,idMatiere){
    return this.httpClient.delete(this.url+'/'+idMatiere+'/sections/'+idSection);
  }

}
