import { Cart } from './../models/Cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  saveToLocal(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
  }
  CheckForKey(key: string) {
    return localStorage.getItem(key);
  }

  SaveCart(key: string, value: Cart) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
  }
  LoadCart(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
