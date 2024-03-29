import { Router } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  authUrl = 'https://edu-back.azurewebsites.net/account/login-jwt';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private jwtService: JwtHelperService,
    private router: Router
  ) {
    let access = localStorage.getItem('tokensTihomir') ?? '';

    if (!this.jwtService.isTokenExpired(JSON.parse(access).accessToken)) {
      let tokenPayload = this.jwtService.decodeToken(
        JSON.parse(access).accessToken
      );
      this.userService.user.username = tokenPayload['userName'];
      this.userService.$user.next({ username: tokenPayload['userName'] });

      // this.userService.$user.subscribe((user : any)=>{
      //   this.userService.user.username = user;
      // })
    }
  }

  login(user: any) {
    return this.http.post(this.authUrl, user).subscribe((response: any) => {
      if (
        response['accessToken'] != null &&
        response['refreshToken'] != null &&
        !this.jwtService.isTokenExpired(response['accessToken'])
      ) {
        localStorage.setItem('tokensTihomir', JSON.stringify(response));
        let tokenPayload = this.jwtService.decodeToken(response['accessToken']);
        //this.userService.user.username = tokenPayload["userName"];
        this.userService.$user.next({ username: tokenPayload['userName'] });
        this.router.navigate(['tihomir', 'dashboard']);
      }
    });
  }

  isLoggeIn() {
    // return this.userService.user.username != "";
    return this.userService.$user.value.username != '';
  }
}
