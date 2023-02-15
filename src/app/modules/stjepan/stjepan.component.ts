import { Component } from '@angular/core';

@Component({
  selector: 'app-stjepan',
  templateUrl: './stjepan.component.html',
  styleUrls: ['./stjepan.component.scss']
})
export class StjepanComponent {
  username = "";
  password = "";

  ispisImena(ime: string) {
    console.log("Username: " + ime);
  }

  ispisSifre(sifra: string) {
    console.log("Password: " + sifra);
  }
}
