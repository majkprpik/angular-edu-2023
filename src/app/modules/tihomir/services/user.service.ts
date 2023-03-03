import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class UserService {

  user : User = {username : ""};
  $user : BehaviorSubject<User> = new BehaviorSubject<User> (this.user);
  $userSubject : Subject<User> = new Subject<User> (); //ne mozes ga citat s .value

  constructor() {
    this.user = {
      username : ""
    }
  }

}
