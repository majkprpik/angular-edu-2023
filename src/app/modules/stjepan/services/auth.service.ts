import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable()
export class AutenService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private userService: UserService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    let access = localStorage.getItem('accessToken_stjepan');
    let tokenPayload = this.jwtHelper.decodeToken(
      this.storageService.get('accessToken_stjepan')
    );

    if (!this.jwtHelper.isTokenExpired(access)) {
      this.userService.$user.next({ username: tokenPayload.userName });
      this.userService.user.username = tokenPayload.userName;
    }
  }

  getAccessToken(): string {
    return this.storageService.get('accessToken_stjepan');
  }

  getRefreshToken(): string {
    return this.storageService.get('refreshToken_stjepan');
  }

  AuthoriseUser(podaciOKorisniku: any) {
    this.http.post(
      'https://edu-back.azurewebsites.net/account/login-basic',
      podaciOKorisniku
    );
  }

  AuthoriseTokenUser(podaciOKorisniku: any) {
    this.http
      .post(
        'https://edu-back.azurewebsites.net/account/login-jwt',
        podaciOKorisniku
      )
      .subscribe((response: any) => {
        if (
          response.accessToken != null &&
          response.refreshToken != null &&
          !this.jwtHelper.isTokenExpired(response.accessToken)
        ) {
          const accessToken = response.accessToken;
          const refreshToken = response.refreshToken;
          this.storageService.set('accessToken_stjepan', accessToken);
          this.storageService.set('refreshToken_stjepan', refreshToken);
          let tokenPayload = this.jwtHelper.decodeToken(accessToken);
          this.userService.$user.next({ username: tokenPayload.userName });
          this.userService.user.username = tokenPayload.userName;
          this.router.navigate(['stjepan', 'dashboard']);
        } else {
          this.router.navigate(['stjepan']);
        }
      });
  }

  isLoggedIn() {
    return this.userService.$user.value.username != '';
  }
}
