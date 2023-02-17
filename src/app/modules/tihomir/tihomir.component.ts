import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tihomir',
  templateUrl: './tihomir.component.html',
  styleUrls: ['./tihomir.component.scss']
})
export class TihomirComponent {

  constructor(private authService : AuthService){
  }

  osoba = {
    username : "",
    password : ""
  };

  login(){
    this.authService.login(this.osoba);
  }
}
