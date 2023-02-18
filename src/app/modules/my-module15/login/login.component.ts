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

  login() {
    this.auth.authLogin(this.osoba).subscribe((res) => {
      console.log(res);
    });
  }
  constructor(private auth: AuthService) {}
}
