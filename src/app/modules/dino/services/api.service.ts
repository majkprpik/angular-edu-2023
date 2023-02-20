import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  authUrl = 'https://edu-back.azurewebsites.net/account/login-jwt';

  constructor(private http: HttpClient) {}

  loginUser(user : any)
  {
    return this.http.post(this.authUrl, user).subscribe((response)=>{
      console.log(response);
    });
  }
}
