import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService {
  constructor() {
    this.user = { username: '' };
  }

  user: User = { username: '' };

  $user: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
}