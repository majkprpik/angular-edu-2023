import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tihomir',
  templateUrl: './tihomir.component.html',
  styleUrls: ['./tihomir.component.scss']
})
export class TihomirComponent {

  viewSwitch : boolean = true;

  constructor(private authService : AuthService){
  }

  switchView(){
    this.viewSwitch = !this.viewSwitch;
    console.log(this.viewSwitch);
  }

  // osoba = {
  //   username : "",
  //   password : ""
  // };

  // login(){
  //   this.authService.login(this.osoba);
  // }
}
