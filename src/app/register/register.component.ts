import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel = {email:'', pwd:'', role:''};

  constructor( private registerService:LoginService ) { }

  ngOnInit(): void {
  }

  save(){
    this.registerService.addUser( this.registerModel );
  }

}
