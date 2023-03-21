import { AuthService } from './services/auth.service';
import { UserServiceService } from './user-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-my-module15',
  templateUrl: './my-module15.component.html',
  styleUrls: ['./my-module15.component.scss']
})
export class MyModule15Component {
  /**
   *
   */
  
  constructor(private UserService: UserServiceService, private authService: AuthService) {
    
  }

}
