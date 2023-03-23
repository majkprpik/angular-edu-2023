import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AutenService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AutenService,
    private router: Router,
    private storage: StorageService, 
    private jwtHelper: JwtHelperService, 
    private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['stjepan', '**']);
      return false;
    }
  }
  
}
