import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  login(objekat: any) {
    return this.http.post(
      'https://edu-back.azurewebsites.net/account/login-basic',
      objekat
    );
  }

  loginJwt(objekat: any) {
    console.log('tu sam u Loginjwt');
    return this.http.post(
      'https://edu-back.azurewebsites.net/account/login-jwt',
      objekat
    );
  }
  saveToLocal(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocal(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}
