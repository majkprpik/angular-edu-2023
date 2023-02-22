
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-karla',
  templateUrl: './karla.component.html',
  styleUrls: ['./karla.component.scss'],
})
export class KarlaComponent {
  username: string='';
  password: string='';
  user = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private storageService: StorageService) {}
 
  login() {
    // this.user.username = this.username;
    // this.user.password = this.password;
    // console.log(this.user);

    // this.service.loginToken(this.user).subscribe((response: any) => {
    //   console.log(response);
    // });

    this.authService.loginToken(this.user);
    
    console.log(this.user);
    
  }

 
}
