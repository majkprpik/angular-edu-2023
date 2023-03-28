import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserServiceService } from './../user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private auth: AuthService,
    private storageService: StorageService,
    private http: HttpClient,
    private JwtHelper: JwtHelperService,
    private UserServiceService: UserServiceService,
    private router: Router
  ) {}

  login() {
    this.auth.authLogin(this.osoba).subscribe((res) => {});
    this.http
      .post('https://edu-back.azurewebsites.net/account/login-jwt', this.osoba)
      .subscribe((response: any) => {
        if (
          response.accessToken != null &&
          response.refreshToken != null &&
          !this.JwtHelper.isTokenExpired(response.accessToken)
        ) {
          this.storageService.set('Teo_access_token', response.accessToken);
          this.storageService.set('Teo_refresh_token', response.refreshToken);
          let tokenPayLoad = this.JwtHelper.decodeToken(response.accessToken);
          this.UserServiceService.user.username = tokenPayLoad.username;
          this.UserServiceService.$user.next({
            username: tokenPayLoad.username,
          });
          this.router.navigate(['my-module15', 'dashboard']);
        }
      });
  }

  hide: boolean = false;
}
