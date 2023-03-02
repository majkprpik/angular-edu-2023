
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {

  tokens : any;
  accessToken : any;
  refreshToken : any;

  constructor(private authService : AuthService) {
    
    
  }

  

}
