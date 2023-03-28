import { Router, RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private userService: UserService,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {
    let accessToken = this.storageService.getFromLocal('accessToken_karla');
    // accessToken = JSON.parse(accessToken)
    let tokenPayload = this.jwtHelperService.decodeToken(accessToken);
    if (
      accessToken != null &&
      !this.jwtHelperService.isTokenExpired(accessToken)
    ) {
      this.userService.user.username = tokenPayload.userName;
      this.userService.$user.next({ username: tokenPayload.userName });
      // console.log(tokenPayload.userName);
    }
  }

  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';

  getAccessToken() {
    return this.storageService.getFromLocal('accessToken_karla');
  }

  getRefreshToken() {
    return this.storageService.getFromLocal('refreshToken_karla');
  }

  loginToken(user: any) {
    return this.http.post(this.urlToken, user).subscribe((response: any) => {
      if (
        response.accessToken != null &&
        response.refreshToken != null &&
        !this.jwtHelperService.isTokenExpired(response.accessToken)
      ) {
        console.log(response);

        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken;
        this.storageService.saveToLocal('accessToken_karla', accessToken);
        this.storageService.saveToLocal('refreshToken_karla', refreshToken);

        let tokenPayload = this.jwtHelperService.decodeToken(accessToken);
        console.log(tokenPayload);
        // this.userService.user.username = tokenPayload.username;

        this.userService.$user.next({ username: tokenPayload.userName });

        // console.log((this.userService.user.username = tokenPayload.username));

        this.router.navigate(['karla', 'dashboard']);
      }
    });
  }

  isLoggedIn() {
    // return this.userService.user.username != '';
    // return this.userService.$user.asObservable()
    return this.userService.$user.value.username != '';
  }
}

// this.userService.$user.next({username: ''}); //za subscibe-> rezultat
// this.userService.user.username = payload.userName; // vraca samo rezultat (username)
