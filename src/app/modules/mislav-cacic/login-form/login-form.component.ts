import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  person = {
    username: '',
    password: '',
  };

  login() {
    console.log(this.person);
  }
}
