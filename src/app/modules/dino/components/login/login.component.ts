import { Component, Input, Output, EventEmitter } from '@angular/core';

//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faUnlock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //faEnvelope= faEnvelope;
  //faUnlock = faUnlock

  emailValue = '';
  passwordValue = '';

  @Input() userEmail: string = '';
  @Input() userPassword: string = '';

  @Output() emailEmit = new EventEmitter<string>();
  @Output() passwordEmit = new EventEmitter<string>();

  printLoginInfo() {
    this.emailEmit.emit(this.userEmail);
    this.passwordEmit.emit(this.passwordValue);
    this.emailValue = this.userEmail;
    this.passwordValue = this.userPassword;
  }
}
