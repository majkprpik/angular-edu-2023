import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AutenService {
  constructor(private http:HttpClient, private storageService:StorageService) {}

  getAccessToken(): string {
    return this.storageService.dohvatiIzLocala('accessToken')
  }

  getRefreshToken(): string {
    return this.storageService.dohvatiIzLocala('refreshToken')
  }

  CreateUser(podaciOKorisniku: any) {
    this.http.post("https://edu-back.azurewebsites.net/account/login-basic", podaciOKorisniku)
  }

  CreateTokenUser(podaciOKorisniku: any) {
    this.http.post("https://edu-back.azurewebsites.net/account/login-jwt", podaciOKorisniku)
    .subscribe((response: any) => {
      console.log(response)
      const accessToken = response.accessToken;
      const refreshToken = response.refreshToken;
      this.storageService.spremiULocal('accessToken', accessToken);
      this.storageService.spremiULocal('refreshToken', refreshToken);
    })
  }
}

