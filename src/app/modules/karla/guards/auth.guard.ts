import { UserService } from './../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService,
    private jwtHelperService: JwtHelperService,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['karla', '']);
      return false;
    } else return true;

    // return this.authService.isLoggedIn();
  }
}
