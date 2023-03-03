import { User } from '../models/User';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService {
  constructor() {
    this.user = { username: '' };
  }
  user: User = { username: '' };

  $user: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
}
