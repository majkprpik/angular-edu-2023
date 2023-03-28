import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor() {
    this.user = { username: '' };
    // this.$userSubject.value; //ne moze asinkrono citati vrijednost
    // this.$user.value; //moze asinkrono citati vrijednost
  }

  user: User = { username: '' };
  $user: BehaviorSubject<User> = new BehaviorSubject<User>(this.user); // mora imati pocetnu vrijednost
  // $userSubject: Subject<User> = new Subject<User>(); //nema pocetnu vrijednost
}
