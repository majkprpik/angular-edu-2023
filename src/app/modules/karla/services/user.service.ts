import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    this.user = { username: '' };
  }

  user: {
    username: string;
  };

  // user1 = { username:''}
  
}
