import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnseignantIdClassService {
  url = environment.proxyServiceEnseignant +"/enseignantIdClasses";
  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllEnseignantIdClasses(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getEnseignantIdClassById(classId: Number) {
    return this.httpClient.get<any>(this.url+'/'+classId);
  }
  ajouteEnseignantIdClass(cla):Observable<any> {
    return this.httpClient.post(this.url,cla);
  }
  deleteEnseignantIdClass(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
  newHeader = {
    headers: new HttpHeaders ({
      'Content-Type':  'text/uri-list',
      'Accept':'text/uri-list'
    })
  };
  ajouteEnseignant(idClass,idEnseignant){
    return this.httpClient.put(this.url+"/"+idClass+"/refClass",environment.proxyServiceEnseignant+"/enseignants/"+idEnseignant,this.newHeader)
  }
  deleteEnseignant(idClass,idEnseignant){
    return this.httpClient.delete(this.url+'/'+idClass+'/refClass/'+idEnseignant);
  }
}
