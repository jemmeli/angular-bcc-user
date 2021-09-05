import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginModel = {email:'', password:''};
  private isSuccess = false;

  private loginData = [
    {email: "admin", pwd: "admin"},
    {email: "user", pwd: "user"}
  ]
  constructor() { }

  ngOnInit(): void {

    //run table usinf of
    for( let item of this.loginData ){
      console.log("item in of ", item);
    }

    console.log("*******************************");

    //run table usinf in
    for( let item in this.loginData ){
      console.log("item in in ", item);
      console.log("this.loginData", this.loginData[item]);
    }
  }

  checkSuccess(){
    if(this.isSuccess == true){
      console.log("login success");
    }else{
      console.log("login failed");
    }
  }

  checkUser(){
    console.log(this.loginModel);

    for( let item of this.loginData ){
      if ( (this.loginModel.email == item.email) && (this.loginModel.password == item.pwd) ){
        this.isSuccess = true;
        break;
      }else{
        this.isSuccess = false;
      }
    }

    this.checkSuccess();

  }

}
