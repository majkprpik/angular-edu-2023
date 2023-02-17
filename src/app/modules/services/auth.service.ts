import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  CreateUser(userData: any) {
    this.http
      .post('https://edu-back.azurewebsites.net/account/login-basic', userData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  CreateTokenUser(userData: any) {
    this.http
      .post('https://edu-back.azurewebsites.net/account/login-jwt', userData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
