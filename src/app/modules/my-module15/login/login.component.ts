import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log(`Email: ${this.username}`);
    console.log(`Password: ${this.password}`);
  }
}