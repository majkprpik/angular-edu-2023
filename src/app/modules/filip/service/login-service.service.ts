import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginServiceService {



  constructor(private http: HttpClient) { }

  login(objekat: any) {
 return this.http.post('https://edu-back.azurewebsites.net/account/login-basic', objekat);
  }

  

  loginJwt(objekat: any) {
    console.log("tu sam u Loginjwt");
    return this.http.post('https://edu-back.azurewebsites.net/api/account/login-jwt', objekat);
  }
}
