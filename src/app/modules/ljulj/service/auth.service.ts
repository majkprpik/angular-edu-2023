import { StorageService } from './../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authurl = 'https://edu-back.azurewebsites.net/account/login-jwt';
  constructor(private http: HttpClient, private local: StorageService) {}
  
  testUser={
    username: 'test',
    password: 'test123'
  }

  sendTestInfo(user: any) {
    return this.http.post(this.authurl, user);
    1
  }
  loginUser()
{
  return this.http.post(this.authurl, this.testUser).subscribe((response) => 
  {
  const accesToken = response['accesToken'];
  const refreshToken = response['refreshToken'];
  this.local.saveLocal(accesToken, refreshToken);
  console.log(response);
  



  


 });
}

}

