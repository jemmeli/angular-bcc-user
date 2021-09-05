import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = {email:'', password:''};

  constructor( private loginService:LoginService )
  {

  }

  ngOnInit(): void {
  }

  login(){

    console.log( "from service --> ", this.loginService.loginIn( this.loginModel ) );

  }





}
