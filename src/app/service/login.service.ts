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
    console.log( this.loginData );
  }

}
