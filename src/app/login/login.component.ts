import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = {email:'', password:''};
  logInDash = false;

  constructor( private loginService:LoginService, private _route:Router )
  {

  }

  ngOnInit(): void {
  }

  login(){

    console.log( "from service --> ", this.loginService.loginIn( this.loginModel ) );
    if( this.loginService.loginIn( this.loginModel ) ){
      this._route.navigateByUrl("dash");
      this.logInDash =  false;

    }else{
      this.logInDash =  true;
    }

  }





}
