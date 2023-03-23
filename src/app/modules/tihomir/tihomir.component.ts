import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-tihomir',
  templateUrl: './tihomir.component.html',
  styleUrls: ['./tihomir.component.scss'],
})
export class TihomirComponent {
  constructor() {
    console.log('Tihomir component');
  }
}
