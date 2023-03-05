import { UserService } from './user.service';
import { LoginServiceService } from './login-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable(
  
)
export class AuthService {

  constructor(private http:HttpClient, private loginService:LoginServiceService, private userService:UserService, private jwtHelper: JwtHelperService,  private roter: Router) {
    
  let access= this.getAccessToken()
  if(access!= null && !this.jwtHelper.isTokenExpired(access)){
    let payload = this.jwtHelper.decodeToken(access);
    this.userService.$user.next({username:payload.userName})

    
  }

   }

  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';

  getAccessToken(){
    return this.loginService.getFromLocal('accessToken');
  }

  getRefreshToken(){
    return this.loginService.getFromLocal('refreshToken');
  }

  loginToken(user: any) {
      this.http
     .post(this.urlToken, user)
     .subscribe((response: any)=>{
      console.log(response);
      if(response.accessToken != null && response.refreshToken !=null && !this.jwtHelper.isTokenExpired(response.accessToken)){
      const accessToken = response.accessToken;
      const refreshToken = response.refreshToken;
      this.loginService.saveToLocal('accessToken_Filip', accessToken);
      this.loginService.saveToLocal('refreshToken_Filip', refreshToken);
      let tokenPayload= this.jwtHelper.decodeToken(accessToken);
      this.userService.user.username= tokenPayload.username
      this.userService.$user.next({username: tokenPayload.userName})
      this.roter.navigate(['filip', 'dashboard']);


    }
    });
  }

  isLoggedin(){
  // return this.userService.user.username != '';
  return this.userService.$user.value.username!='';
  }
}
