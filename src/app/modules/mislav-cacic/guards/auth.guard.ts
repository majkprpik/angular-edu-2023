import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { UserService } from './../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private jwtService: JwtHelperService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let access = localStorage.getItem('tokensMislav') ?? '';
    //console.log(access);

    if (!this.jwtService.isTokenExpired(JSON.parse(access).accessToken)) {
      let tokenPayload = this.jwtService.decodeToken(
        JSON.parse(access).accessToken
      );
      console.log('Hehe: ' + JSON.parse(access).accessToken);
      this.userService.user.username = tokenPayload['userName'];
      console.log('Username: ' + tokenPayload['userName']);
    }
    if (this.authService.isLoggeIn()) {
      return true;
    }

    return this.router.navigate(['mislav-cacic/login']);
  }
}
