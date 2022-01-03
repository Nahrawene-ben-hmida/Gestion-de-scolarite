import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  url = environment.proxyServiceEtudiant+"/sections"
  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllSections(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getSectionById(sectionId: Number) {
    return this.httpClient.get<any>(this.url+'/'+sectionId);
  }
  ajouteSection(section):Observable<any> {
    return this.httpClient.post(this.url,section);
  }
  deleteSection(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
  newHeader = {
    headers: new HttpHeaders ({
      'Content-Type':  'text/uri-list',
      'Accept':'text/uri-list'
    })
  };

  ajouteMatiere(idSection,idMatiere){
    console.log("idSection",idSection)
    console.log("idMatiere",idMatiere)
    return this.httpClient.put(this.url+"/"+idSection+"/matiereSection",environment.proxyServiceEtudiant+"/matieres/"+idMatiere,this.newHeader)
  }

  ajouteMatieres(idSection,idMatieres){
    return this.httpClient.put(this.url+"/"+idSection+"/matiereSection",idMatieres)
  }

  getMatieres(idSection) {
    return this.httpClient.get(this.url+"/"+idSection+"/matiereSection");
  }
  countAllSections(){
    return this.httpClient.get(this.url+'/search/countAllSections');
  }
  deleteMatiere(idSection,idMatiere){
    return this.httpClient.delete(this.url+'/'+idSection+'/matiereSection/'+idMatiere);
  }

}
