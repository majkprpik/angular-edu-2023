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

  readFromLocal(key: string) {
    return localStorage.getItem(key);
  }
}
