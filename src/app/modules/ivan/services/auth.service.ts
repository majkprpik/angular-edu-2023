import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService,
    private jwtHelper: JwtHelperService,
    private userService: UserService
  ) {}

  getAccessToken(): string {
    return this.storageService.getFromLocal('accessToken');
  }

  getRefreshToken(): string {
    return this.storageService.getFromLocal('refreshToken');
  }

  CreateUser(userData: any) {
    this.http.post(
      'https://edu-back.azurewebsites.net/account/login-basic',
      userData
    );
  }

  CreateTokenUser(userData: any) {
    this.http
      .post('https://edu-back.azurewebsites.net/account/login-jwt', userData)
      .subscribe((response: any) => {
        if (
          response.accessToken != null &&
          response.refreshToken != null &&
          !this.jwtHelper.isTokenExpired(response.accessToken)
        ) {
          const accessToken = response.accessToken;
          const refreshToken = response.refreshToken;
          this.storageService.saveToLocal('accessToken_ivan', accessToken);
          this.storageService.saveToLocal('refreshToken_ivan', refreshToken);
          let tokenPayload = this.jwtHelper.decodeToken(accessToken);
          this.userService.user.username = tokenPayload.username;
          this.router.navigate(['ivan', 'dashboard']);
        }
      });
  }

  isLoggedIn() {
    return this.userService.user.username != '';
  }
}
