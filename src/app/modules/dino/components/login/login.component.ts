import { AuthService } from './../../services/auth.service';
import { Component,Input,Output,EventEmitter } from '@angular/core';

//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faUnlock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //faEnvelope= faEnvelope;
  //faUnlock = faUnlock
  User={
    username:'',
    password:'',
  }

  constructor(private authService:AuthService) {
  }

  loginUser(){
    this.authService.sendTestInfo(this.User).subscribe(user=>console.log(user));
  }
  loginTokenUser(){
    this.authService.sendTestTokenInfo(this.User).subscribe(user=>console.log(user));
  }

  usernameValue="";
  passwordValue="";

  @Input() userUsername: string = '';
  @Input() userPassword: string = '';

  @Output() emailEmit= new EventEmitter<string>();
  @Output() passwordEmit= new EventEmitter<string>();

  printLoginInfo(){
    console.log(this.usernameValue);
    console.log(this.passwordValue);
    this.emailEmit.emit(this.userUsername);
    this.passwordEmit.emit(this.passwordValue);
    this.usernameValue=this.userUsername;
    this.passwordValue=this.userPassword;
  }
}
