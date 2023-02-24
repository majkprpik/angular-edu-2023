import { Component } from '@angular/core';
import { AutenService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(public autenService: AutenService, public storgeService:StorageService) {}

  onSubmit() {
    const podaciOKorisniku = {
      username: this.username,
      password: this.password
    }

    this.username = "";
    this.password = "";

    this.autenService.CreateUser(podaciOKorisniku);
    this.autenService.CreateTokenUser(podaciOKorisniku);

    console.log(podaciOKorisniku);
  }
}
