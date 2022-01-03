import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from "../../../../../demo/pages/authentication/authentication.service";

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  username;
  constructor(
      private loginService : AuthenticationService
  ) { }

  ngOnInit() {
    // this.username = this.loginService.currentUserValue.username;
    this.username = "Admin"
  }
  logout() {
    this.loginService.logOut();
  }
}
