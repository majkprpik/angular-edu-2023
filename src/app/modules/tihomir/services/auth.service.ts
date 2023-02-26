import { Router } from '@angular/router';
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthService {

  authUrl = "https://edu-back.azurewebsites.net/account/login-jwt";

  constructor(private http : HttpClient, private userService : UserService, private jwtService : JwtHelperService, private router : Router) { }

  login(user : any)
  {
    return this.http.post(this.authUrl, user).subscribe((response : any)=>
    {
      
      if(response["accessToken"] != null && response["refreshToken"] != null && !this.jwtService.isTokenExpired(response["accessToken"])){
        localStorage.setItem("tokensTihomir", JSON.stringify(response));
        console.log(response);
        let tokenPayload = this.jwtService.decodeToken(response["accessToken"]);
        console.log(tokenPayload);
        this.userService.user.username = tokenPayload["userName"];
        this.router.navigate(['tihomir', 'dashboard']);
      }
    });
  }

  isLoggeIn(){
    return this.userService.user.username != "";
  }
}
