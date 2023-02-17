import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "https://edu-back.azurewebsites.net/account/login-basic";

  constructor(private http : HttpClient) { }

  login(user : any)
  {
    return this.http.post(this.authUrl, user).subscribe((response)=>{
      console.log(response);
    });
  }
}
