import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {  }

  private loginData = [
    {email: "admin", pwd: "admin", role:"ADMIN"},
    {email: "user", pwd: "user", role:"USER"},
    {email: "user1", pwd: "user1", role:"USER"}
  ];

  private test = "test";

  loginIn( data: any ): boolean{

    for( let item of this.loginData ){
      if ( (data.email == item.email) &&
            (data.password == item.pwd) ){
        return true;
      }
    }
    return false;
  }

  addUser( data : any ){
    this.loginData.push(data);
    //console.log( this.loginData );
  }

  //loginData est private on doit utliser "getter" pour le rond visible
  //dans register.component.ts
  get _loginData(){
    return this.loginData;
  }

  get _test(){
    return this.test;
  }
  //setter
  set _test(value:any){
    this.test = value;
  }

}
