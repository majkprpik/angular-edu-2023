import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  person = {
    email: '',
    password: '',
  };

  fun() {
    console.log(this.person);
  }
}
