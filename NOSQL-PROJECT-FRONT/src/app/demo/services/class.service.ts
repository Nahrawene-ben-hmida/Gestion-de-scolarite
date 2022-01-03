import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  url = environment.proxyServiceEtudiant+ "/classes";
  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllClasses(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getClassById(classId: Number) {
    return this.httpClient.get<any>(this.url+'/'+classId);
  }
  ajouteClass(cla):Observable<any> {
    return this.httpClient.post(this.url,cla);
  }
  deleteClass(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
  newHeader = {
    headers: new HttpHeaders ({
      'Content-Type':  'text/uri-list',
      'Accept':'text/uri-list'
    })
  };

  ajouteSection(idClass,idSection){
    return this.httpClient.put(this.url+"/"+idClass+"/sectionClass",environment.proxyServiceEtudiant+"/sections/"+idSection,this.newHeader);
  }
  getSection(idClass){
    return this.httpClient.get(this.url+"/"+idClass+"/sectionClass");
  }
  countAllClasses(){
    return this.httpClient.get(this.url+'/search/countAllClasses')
  }
  countClassesBySessionId(sessionId){
    return this.httpClient.get(this.url+'/search/countClassesBySession?idSession='+sessionId);
  }
  getClassesBySessionId(sessionId){
    return this.httpClient.get(this.url+'/search/findClassesBySession?idSession='+sessionId);
  }
}
