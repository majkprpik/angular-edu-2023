import { Component } from '@angular/core';

@Component({
  selector: 'app-mislav-cacic',
  templateUrl: './mislav-cacic.component.html',
  styleUrls: ['./mislav-cacic.component.scss'],
})
export class MislavCacicComponent {
  person = {
    username: '',
    password: '',
  };

  login() {
    console.log(this.person);
  }
}
