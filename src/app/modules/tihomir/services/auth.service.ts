import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

  authUrl = "https://edu-back.azurewebsites.net/account/login-jwt";

  constructor(private http : HttpClient) { }

  login(user : any)
  {
    return this.http.post(this.authUrl, user).subscribe((response)=>
    {
      localStorage.setItem("tokensTihomir", JSON.stringify(response));
      console.log(response);
    });
  }
}
