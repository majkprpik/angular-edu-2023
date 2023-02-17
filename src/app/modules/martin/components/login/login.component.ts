import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  person = {
    username: '',
    password: '',
  };

  log() {
    this.auth.login(this.person);
  }

  logToken() {
    this.auth.loginToken(this.person);
  }
}
