import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {



  constructor() { }
  
  saveToLocal(accesToken: string, rereshToken: string) {
    localStorage.setItem(accesToken, rereshToken);
  }
}
