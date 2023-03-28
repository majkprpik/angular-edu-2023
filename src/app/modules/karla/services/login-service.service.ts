import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  url = 'https://edu-back.azurewebsites.net/account/login-basic';

  login(user: any) {
    return this.http.post(this.url, user);
  }

  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';

  loginToken(user: any) {
    return this.http.post(this.urlToken, user);
  }
}
