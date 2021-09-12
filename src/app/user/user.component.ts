import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../service/login.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData:any;

  userDetail = {id:"", prenom: "", email: "", role:"", pwd: ""}

  constructor( private userService:LoginService, config: NgbModalConfig, private modalService: NgbModal ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.userData = this.userService._loginData;
  }

  initUserDetail(){
    this.userDetail = {id:"", prenom: "", email: "", role:"", pwd: ""}
  }

  open(content:any, user : any) {
    this.modalService.open(content);
    //console.log(user);
    this.userDetail.id = user.id;
    this.userDetail.prenom = user.prenom;
    this.userDetail.email = user.email;
    this.userDetail.role = user.role;
    this.userDetail.pwd = user.pwd;
  }

  removeUser(){
    this.userService.removeUser( this.userDetail );
  }

  updateUser(){
    console.log(this.userDetail);
    this.userService.editUser( this.userDetail );
    //initialiser data
    this.initUserDetail();
  }

}
