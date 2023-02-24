import { Router } from '@angular/router';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  url = 'https://edu-back.azurewebsites.net/account/login-basic';
  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private userService: UserService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}
  sendTestInfo(user: any) {
    return this.http.post(this.url, user);
  }
  sendTestTokenInfo(user: any) {
    return this.http.post(this.urlToken, user).subscribe((response: any) => {
      if (
        response.accessToken != null &&
        response.refreshToken != null &&
        !this.jwtHelper.isTokenExpired(response.accessToken)
      ) {
        const accessToken = response['accessToken'];
        const refreshToken = response['refreshToken'];
        this.storageService.saveToLocal('accesTokenDino', accessToken);
        this.storageService.saveToLocal('refreshTokenDino', refreshToken);
        let tokenPayLoad = this.jwtHelper.decodeToken(accessToken);
        this.userService.user.username = tokenPayLoad.userName;
        console.log(tokenPayLoad);
        console.log(this.userService.user.username);
        console.log(this.isLoggedIn());
        this.router.navigate(['Dino', 'Dashboard']);
      }
    });
  }

  isLoggedIn() {
    return this.userService.user.username != '';
  }
}
