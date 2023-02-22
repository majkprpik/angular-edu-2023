import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveLocal(accesToken:string,refreshToken:string) {
    localStorage.setItem(accesToken, refreshToken);
  }
}
