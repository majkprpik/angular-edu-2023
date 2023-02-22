import { AutenService } from './../services/auten-service.service';
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-stjepan',
  templateUrl: './stjepan.component.html',
  styleUrls: ['./stjepan.component.scss']
})
export class StjepanComponent {
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
