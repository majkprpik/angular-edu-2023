import { UserService } from './../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../service/auth.service';
import { AuthGuard } from './../guards/auth.guard';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ljulj',
  templateUrl: './ljulj.component.html',
  styleUrls: ['./ljulj.component.scss'],
})
export class LjuljComponent {
  /**
   *
   */
  constructor(
    private authGuard: AuthGuard,
    private authService: AuthService,
    private storageService: StorageService,
    private jwtHelperService: JwtHelperService,
    private userService: UserService
  ) {
    
  }
}
