import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  objekat: any = {
    name: '',
    password: '',
  };

  constructor() {}

  spremi() {
    this.objekat.name = this.name;
    this.objekat.password = this.password;
  }
}
