import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject : BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(
      private httpClient: HttpClient,
      private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  authenticate(username,password) {
    localStorage.setItem('currentUser',JSON.stringify({username:username,password:password}));
    this.currentUserSubject.next({username:username,password:password});
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/auth/signin');
  }
}
