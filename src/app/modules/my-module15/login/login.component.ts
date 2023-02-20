import { HttpClient } from '@angular/common/http';
import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  osoba = {
    username: '',
    password: '',
  };

  constructor(private auth: AuthService, private storageService: StorageService, private http: HttpClient) {}
  
  login() {
    this.auth.authLogin(this.osoba).subscribe((res) => {
      console.log(res);
    });
    this.http.post('https://edu-back.azurewebsites.net/account/login-jwt', this.osoba).subscribe((response: any) => {
  
      this.storageService.set('Teo_access_token', response.access_token);
      this.storageService.set('Teo_refresh_token', response.refresh_token);
    });
  }
  
}
