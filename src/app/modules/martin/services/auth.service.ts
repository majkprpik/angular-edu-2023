import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  url = 'https://edu-back.azurewebsites.net/account/login-basic';
  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';

  login(user: any) {
    return this.http.post(this.url, user).subscribe((res) => {
      console.log(res);
    });
  }

  loginToken(user: any) {
    return this.http.post(this.urlToken, user).subscribe((res) => {
      console.log(res);
    });
  }
}
