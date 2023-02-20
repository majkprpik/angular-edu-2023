import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  username: string = 'username';
  password: string = 'password';

  constructor(private http: HttpClient, private StorageService: StorageService) {}

  getAccessToken(): string{
    return this.StorageService.get('Teo_access_token');
  }

  authLogin(user) {
    return this.http.post(
      'https://edu-back.azurewebsites.net/account/login-jwt',
      {
        username: user.username,
        password: user.password
      }
    );
  }
}
