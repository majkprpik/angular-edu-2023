import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';

import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-karla',
  templateUrl: './karla.component.html',
  styleUrls: ['./karla.component.scss'],
})
export class KarlaComponent {
  constructor(
    private authGuard: AuthGuard,
    private storageService: StorageService,
    private jwtHelperService: JwtHelperService,
    private userService: UserService
  ) {
    this.checkToken();
  }

  checkToken() {}
  user = {
    username: '',
    password: '',
  };

  login() {
    console.log(this.user);
  }
}
