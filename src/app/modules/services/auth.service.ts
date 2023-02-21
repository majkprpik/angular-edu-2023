import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';



@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storageService:StorageService) {}

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
       const accessToken = response.accessToken
       const refreshToken = response.refreshToken
       this.storageService.saveToLocal('accessToken', accessToken);
       this.storageService.saveToLocal('refreshToken',refreshToken)
      });
  }

}
