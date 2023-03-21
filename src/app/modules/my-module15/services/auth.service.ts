import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserServiceService } from './../user-service.service';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {
  user = {
    username: '',
  };
  username: string = 'username';
  password: string = 'password';

  constructor(
    private http: HttpClient,
    private StorageService: StorageService,
    private UserService: UserServiceService,
    private JwtHelper: JwtHelperService
  ) {
    let access = JSON.parse(localStorage.getItem('Teo_access_token'));

    if (!this.JwtHelper.isTokenExpired(access)) {
      let payload = this.JwtHelper.decodeToken(access);
      this.UserService.user.username = payload.userName;
      this.UserService.$user.next({username: payload.username});
    }
  }

  getAccessToken(): string {
    return this.StorageService.get('Teo_access_token');
  }

  getRefreshToken(): string {
    return this.StorageService.get('Teo_refresh_token');
  }

  isLogedIn() {
    return this.UserService.$user.value.username!= '';
  }

  logout() {
    //.....
    //....
  }

  authLogin($user) {
    return this.http.post(
      'https://edu-back.azurewebsites.net/account/login-jwt',
      {
        username: $user.username,
        password: $user.password,
      }
    );
  }
}
