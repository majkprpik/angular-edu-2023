import { Injectable } from '@angular/core';

@Injectable()

export class UserServiceService {
  user: {
    username: string,
  }

  constructor() {
    this.user = {
      username: '',
    }
   }
}
