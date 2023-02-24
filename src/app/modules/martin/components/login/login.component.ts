import { AuthService } from './../../services/auth.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  // log() {
  //   this.auth.login(this.person);
  // }

  // logToken() {
  //   this.auth.loginToken(this.person);
  // }

  loginUser() {
    this.auth.sendTestInfo(this.person).subscribe((user) => console.log(user));
  }
  loginTokenUser() {
    this.auth.sendTestTokenInfo(this.person);
  }

  usernameValue = '';
  passwordValue = '';

  @Input() userUsername: string = '';
  @Input() userPassword: string = '';

  @Output() emailEmit = new EventEmitter<string>();
  @Output() passwordEmit = new EventEmitter<string>();

  printLoginInfo() {
    console.log(this.usernameValue);
    console.log(this.passwordValue);
    this.emailEmit.emit(this.userUsername);
    this.passwordEmit.emit(this.passwordValue);
    this.usernameValue = this.userUsername;
    this.passwordValue = this.userPassword;
  }
}
