import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  url = environment.proxyServiceEnseignant+"/enseignants"
  constructor(
      protected  httpClient: HttpClient
  ) { }
  getAllEnseignants(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getEnseignantById(enseignantId: Number) {
    return this.httpClient.get<any>(this.url+'/'+enseignantId);
  }
  ajouteEnseignant(enseignant):Observable<any> {
    return this.httpClient.post(this.url,enseignant);
  }
  deleteEnseignant(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }

  getClasses(idEnseignant){
    return this.httpClient.get(this.url+"/"+idEnseignant+"/enseignantIdClasses")
  }
  countAllEnseignants(){
    return this.httpClient.get(this.url+"/search/countAllEnseignants");
  }
  deleteClass(idEnseignant,idClass){
    return this.httpClient.delete(this.url+'/'+idEnseignant+'/enseignantIdClasses/'+idClass);
  }
}
