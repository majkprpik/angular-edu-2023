import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage`, error);
    }
  }

  get(key: string): any {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage`, error);
      return null;
    }
  }

  remove(value: any) {
    localStorage.removeItem(value);
  }
}
