import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '././services/auth.service';
import { UserService } from '././services/user.service';

@Component({
  selector: 'app-mislav-cacic',
  templateUrl: './mislav-cacic.component.html',
  styleUrls: ['./mislav-cacic.component.scss'],
})
export class MislavCacicComponent {
  constructor(
    private authService: AuthService,
    private jwtService: JwtHelperService,
    private userService: UserService
  ) {
    let access = localStorage.getItem('tokensMislav') ?? '';

    if (!this.jwtService.isTokenExpired(JSON.parse(access).accessToken)) {
      let tokenPayload = this.jwtService.decodeToken(
        JSON.parse(access).accessToken
      );

      this.userService.user.username = tokenPayload['userName'];
    }
  }
}
