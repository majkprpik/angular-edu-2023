import { JwtHelperService } from '@auth0/angular-jwt';
import { UserServiceService } from './../user-service.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

 
  constructor(private authService: AuthService, private router: Router,
  private userService: UserServiceService, private jwtHelperService: JwtHelperService) {
    
    
  }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | 
     Promise<boolean | UrlTree> | 
     boolean |
      UrlTree {
    if(this.authService.isLogedIn()){
      return true;
    }
    else{
      this.router.navigate(['my-module15', '']);
      return false;
    }
  }
  
}
