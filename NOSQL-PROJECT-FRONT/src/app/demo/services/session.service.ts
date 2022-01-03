import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = environment.proxyServiceEtudiant+"/sessions"

  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllSession(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getSessionById(sessionId: Number) {
    return this.httpClient.get<any>(this.url+'/'+sessionId);
  }
  ajouteSession(session):Observable<any> {
    return this.httpClient.post(this.url,session);
  }
  deleteSession(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
}
