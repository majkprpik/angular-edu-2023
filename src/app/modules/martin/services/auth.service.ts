import { Router } from '@angular/router';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private userService: UserService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  url = 'https://edu-back.azurewebsites.net/account/login-basic';
  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';

  sendTestInfo(user: any) {
    return this.http.post(this.url, user);
  }

  sendTestTokenInfo(user: any) {
    this.http.post(this.urlToken, user).subscribe((response: any) => {
      if (
        response.accessToken != null &&
        response.refreshToken != null &&
        !this.jwtHelper.isTokenExpired(response.accessToken)
      ) {
        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken;
        this.storageService.saveToLocal('accessToken_Martin', accessToken);
        this.storageService.saveToLocal('refreshToken_Martin', refreshToken);
        let tokenPayLoad = this.jwtHelper.decodeToken(accessToken);
        this.userService.user.username = tokenPayLoad.userName;
        this.router.navigate(['martin', 'dashboard']);
      }
    });
  }

  isLoggedIn() {
    return this.userService.user.username != '';
  }
}
