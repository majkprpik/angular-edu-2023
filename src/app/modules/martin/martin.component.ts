import { JwtHelperService } from '@auth0/angular-jwt';
import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-martin',
  templateUrl: './martin.component.html',
  styleUrls: ['./martin.component.scss'],
})
export class MartinComponent {
  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private jwtService: JwtHelperService
  ) {}
}
