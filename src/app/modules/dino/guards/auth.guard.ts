import { UserService } from './../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService,
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
    // let accessToken = JSON.parse(localStorage.getItem('accessTokenDino'));
    // if (!this.jwtHelper.isTokenExpired(accessToken)) {
    //   let tokenPayLoad = this.jwtHelper.decodeToken(accessToken);
    //   this.userService.user.username = tokenPayLoad.userName;
    // }else{
    //console.log('User is logged in!');
    //}

    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['Dino', '**']);
      return false;
    }
    //return this.authService.isLoggedIn();
  }
}
