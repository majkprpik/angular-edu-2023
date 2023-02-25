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
    private router: Router) {}

  getAccessToken(): string {
    return this.storageService.dohvatiIzLocala('accessToken_stjepan')
  }

  getRefreshToken(): string {
    return this.storageService.dohvatiIzLocala('refreshToken_stjepan')
  }

  AuthoriseUser(podaciOKorisniku: any) {
    this.http.post("https://edu-back.azurewebsites.net/account/login-basic", podaciOKorisniku)
  }

  AuthoriseTokenUser(podaciOKorisniku: any) {
    this.http.post("https://edu-back.azurewebsites.net/account/login-jwt", podaciOKorisniku)
    .subscribe((response: any) => {
      if (response.accessToken != null && response.refreshToken != null
        && !this.jwtHelper.isTokenExpired(response.accessToken)) {
      const accessToken = response.accessToken;
      const refreshToken = response.refreshToken;
      this.storageService.spremiULocal('accessToken_stjepan', accessToken);
      this.storageService.spremiULocal('refreshToken_stjepan', refreshToken);
      let tokenPayload = this.jwtHelper.decodeToken(accessToken);
      this.userService.user.username = tokenPayload.username;
      this.router.navigate(['stjepan', 'dashboard'])
      }
    })
  }

  isLoggedIn() {
    return this.userService.user.username != '';
  }
}

