import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData:any;

  constructor( private userService:LoginService ) { }

  ngOnInit(): void {
    this.userData = this.userService._loginData;
  }

}
