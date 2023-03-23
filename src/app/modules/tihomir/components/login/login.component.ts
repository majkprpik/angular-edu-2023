import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  osoba = {
    username: '',
    password: '',
  };

  login() {
    this.authService.login(this.osoba);
  }
}
