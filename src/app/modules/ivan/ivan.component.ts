import { Component } from '@angular/core';

@Component({
  selector: 'app-ivan',
  templateUrl: './ivan.component.html',
  styleUrls: ['./ivan.component.scss'],
})
export class IvanComponent {
  username: string;
  password: string;

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password,
    };

    (this.username = ''), (this.password = '');

    console.log(userData);
  }
}
