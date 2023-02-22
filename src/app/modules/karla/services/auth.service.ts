import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService:StorageService) {}

  // url = 'https://edu-back.azurewebsites.net/account/login-basic';

  // login(user: any) {
  //   return this.http.post(this.url, user)
  // }

  urlToken = 'https://edu-back.azurewebsites.net/account/login-jwt';

  getAccessToken(){
    return this.storageService.getFromLocal('accessToken');
  }

  getRefreshToken(){
    return this.storageService.getFromLocal('refreshToken');
  }

  loginToken(user: any) {
    return this.http.post(this.urlToken, user).subscribe((response: any)=>{
      console.log(response);
      const accessToken = response.accessToken;
      const refreshToken = response.refreshToken;
      this.storageService.saveToLocal('accessToken', accessToken);
      this.storageService.saveToLocal('refreshToken', refreshToken);
    });
  }


}
