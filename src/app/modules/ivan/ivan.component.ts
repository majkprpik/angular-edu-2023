import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-ivan',
  templateUrl: './ivan.component.html',
  styleUrls: ['./ivan.component.scss'],
})
export class IvanComponent {
  username: string;
  password: string;

  constructor(public AuthService: AuthService, public storageService:StorageService) {}

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password,
    };
    (this.username = ''), (this.password = '');

    this.AuthService.CreateUser(userData);
    this.AuthService.CreateTokenUser(userData)

    ;
  }
}
