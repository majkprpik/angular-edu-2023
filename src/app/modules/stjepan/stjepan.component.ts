import { Component } from '@angular/core';

@Component({
  selector: 'app-stjepan',
  templateUrl: './stjepan.component.html',
  styleUrls: ['./stjepan.component.scss'],
})
export class StjepanComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    const podaciOKorisniku = {
      username: this.username,
      password: this.password,
    };

    this.username = '';
    this.password = '';

    console.log(podaciOKorisniku);
  }
}
