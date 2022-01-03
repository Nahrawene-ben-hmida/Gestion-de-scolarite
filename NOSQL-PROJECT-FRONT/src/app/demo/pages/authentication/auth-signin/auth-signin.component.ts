import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  userForm: FormGroup;
  submitted = false;
  loginFailed = false;

  constructor(
      private formBuilder: FormBuilder,
      private loginService: AuthenticationService,
      private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    console.log(this.userForm);
    this.submitted = true;
    this.loginFailed = false;
    if ( this.userForm.invalid) {
      return;
    }
    if(this.userForm.value.username=="admin"&&this.userForm.value.password == "admin"){
      this.loginService.authenticate(this.userForm.value.username, this.userForm.value.password);
      this.submitted = false;
      this.router.navigateByUrl('/');
    }else{
      this.loginFailed = true;
    }

  }
}
