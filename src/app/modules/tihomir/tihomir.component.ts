import { UserService } from './services/user.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-tihomir',
  templateUrl: './tihomir.component.html',
  styleUrls: ['./tihomir.component.scss']
})
export class TihomirComponent {

  constructor(private authService : AuthService, private jwtService : JwtHelperService, private userService : UserService){
    // let access = localStorage.getItem("tokensTihomir")??"";
    // //console.log(access);

    // if(!this.jwtService.isTokenExpired(JSON.parse(access).accessToken)){
    //   let tokenPayload = this.jwtService.decodeToken(JSON.parse(access).accessToken);
    //   console.log("Hehe: " + JSON.parse(access).accessToken);
    //   this.userService.user.username = tokenPayload["userName"];
    //   console.log("Username: " + tokenPayload["userName"]);
    // }
    console.log("Tihomir component");
  }
}
