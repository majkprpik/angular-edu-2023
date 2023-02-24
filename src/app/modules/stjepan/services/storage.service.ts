import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  spremiULocal(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  dohvatiIzLocala(key:string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}