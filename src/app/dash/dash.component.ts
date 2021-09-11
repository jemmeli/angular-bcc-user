import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  userData:any;

  constructor( private userService:LoginService ) { }

  ngOnInit(): void {
    this.userData = this.userService._loginData;
  }

}
