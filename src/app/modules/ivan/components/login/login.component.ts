import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    public AuthService: AuthService,
    public storageService: StorageService
  ) {}

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password,
    };
    (this.username = ''), (this.password = '');

    this.AuthService.CreateUser(userData);
    this.AuthService.CreateTokenUser(userData);
  }
}
