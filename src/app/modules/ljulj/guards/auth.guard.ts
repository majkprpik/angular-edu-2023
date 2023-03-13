import { UserService } from './../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
  
)
export class AuthGuard implements CanActivate {
  
  constructor(private authService:AuthService,private router:Router,private jwtHelperService:JwtHelperService, private userService:UserService) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let accessToken_ljulj = localStorage.getItem('accessToken_ljulj');
    if (this.jwtHelperService.isTokenExpired(accessToken_ljulj)) {
      let tokenPayLoad = this.jwtHelperService.decodeToken(accessToken_ljulj);
      this.userService.user.username=tokenPayLoad.userName
    }
      if(this.authService.isLoggedIn()){
        return true
      }
      else{
        this.router.navigate(['Ljulj','**'])  
         return false;
      }
  }

  
}
