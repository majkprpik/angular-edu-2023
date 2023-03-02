import { Component } from '@angular/core';
import { LoginServiceService } from '../../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
username: string ='';
password: string='';
objekat:any = {
  username:'',
  password:''
}


constructor(private loginServiceService: LoginServiceService ){

}

onSubmit(){
  this.loginServiceService.loginJwt(this.objekat).subscribe(response => {
    console.log('user created:', response);
    console.log(this.objekat);
  });
}

// JWT token

//token koji dobiješ spremiti u loacl storage






spremi(){
this.objekat.username = this.username;
this.objekat.password = this.password;
console.log(this.objekat,'log ime i pass')
}




}
