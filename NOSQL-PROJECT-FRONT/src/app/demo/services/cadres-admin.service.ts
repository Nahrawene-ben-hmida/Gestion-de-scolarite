import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CadresAdminService {
  url = environment.proxyServiceCadresAdmin+"/cadreAdmins"

  constructor(
      protected httpClient: HttpClient
  ) { }
  getAllCadreAdmins(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  getCadreAdminById(cadreAdminId: Number) {
    return this.httpClient.get<any>(this.url+'/'+cadreAdminId);
  }
  ajouteCadreAdmin(cadreAdmin):Observable<any> {
    return this.httpClient.post(this.url,cadreAdmin);
  }
  deleteCadreAdmin(id) {
    return this.httpClient.delete(this.url+'/'+id);
  }
  countAllCadresAdmins(){
    return this.httpClient.get(this.url+'/search/countAllCadreAdmins');
  }
}
