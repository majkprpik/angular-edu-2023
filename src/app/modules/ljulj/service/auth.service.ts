import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt'
import {Router} from '@angular/router'


@Injectable()
export class AuthService {
  UserService: any;
  
  constructor(private http: HttpClient, private storageService:StorageService,private jwtHelper:JwtHelperService,private userService:UserService, private router:Router) {}

  getAccessToken():string {
    return this.storageService.getFromLocal('accessToken')
  }

  getRefreshToken():string {
    return this.storageService.getFromLocal('refreshToken')
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
        if(response.accessToken != null && response.refreshToken != null
          && !this.jwtHelper.isTokenExpired(response.accessToken)) {
          const accessToken = response.accessToken
          const refreshToken = response.refreshToken
          this.storageService.saveToLocal('accessToken_ljulj', accessToken);
          this.storageService.saveToLocal('refreshToken_ljulj',refreshToken)
          let tokenPayload = this.jwtHelper.decodeToken(accessToken);
          this.userService.user.username=tokenPayload.userName
          console.log(tokenPayload);
          console.log(this.userService.user.username)
          this.router.navigate(['Ljulj','Dashboard']);

         }
      
      });
  }

  isLoggedIn() {
  return this.UserService.user.username !='';
}
}