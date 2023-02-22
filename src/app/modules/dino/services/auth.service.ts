import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  // person={
  //   username:'dino',
  //   password:'123'
  // }
  url = 'https://edu-back.azurewebsites.net/account/login-basic';
  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';
  constructor(private http: HttpClient) {}
  sendTestInfo(user: any) {
    return this.http.post(this.url, user);
  }
  sendTestTokenInfo(user:any){
    return this.http.post(this.urlToken,user);
  }
}