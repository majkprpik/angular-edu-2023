import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  constructor() {
    this.user = { username: '' };
  }

  user: User = { username: '' };
  $user: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  $userSubject: Subject<User> = new Subject<User>();
}
