import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: {
    username:string,
    password:string
  }
  router: any;
  loginUser() {
    this.authService.CreateTokenUser(this.user)
    
  }
  constructor(private authService: AuthService) {
    this.user={
      username:'',
      password:''
    }
  }
  email: string = '';
  password: string = '';

  onSubmit() {}
}
