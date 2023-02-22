
import { Component } from '@angular/core';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user={username: '', password: '' }
  ispisosoba() {
    console.log(this.user);
  }
  constructor(private auth: AuthService) {} 
  loginUser() {
    this.auth
      .sendTestInfo(this.user)
      .subscribe((person) => console.log(person));

      
  }
}
