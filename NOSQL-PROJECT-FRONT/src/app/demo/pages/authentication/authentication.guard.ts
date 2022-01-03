import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad  {
  constructor(
      private loginService: AuthenticationService,
      private router: Router
  ) {
  }
  canLoad(
      route: Route,
      segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.loginService.currentUserValue;
    if(currentUser){
      return true;
    }
    this.router.navigate(['/auth/signin']);
    return false;
  }
}
