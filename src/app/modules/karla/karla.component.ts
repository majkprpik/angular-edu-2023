import { Component } from '@angular/core';

@Component({
  selector: 'app-karla',
  templateUrl: './karla.component.html',
  styleUrls: ['./karla.component.scss'],
})
export class KarlaComponent {
  user = {
    username: '',
    password: '',
  };

  login() {
    console.log(this.user);
  }
}
