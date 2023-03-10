import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  user: User = { username: '' };
  $user: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  $userSubject: Subject<User> = new Subject<User>(); //ne mozes ga citat s .value

  constructor() {
    this.user = {
      username: '',
    };
  }
}
