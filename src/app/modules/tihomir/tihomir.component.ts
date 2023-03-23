import { Component } from '@angular/core';

@Component({
  selector: 'app-tihomir',
  templateUrl: './tihomir.component.html',
  styleUrls: ['./tihomir.component.scss'],
})
export class TihomirComponent {
  osoba = {
    username: '',
    password: '',
  };

  login() {
    console.log(this.osoba);
  }
}
