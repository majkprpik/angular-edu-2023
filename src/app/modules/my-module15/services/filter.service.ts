import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  constructor() {}

  private categorySubject = new BehaviorSubject<string>('');

  getCategory() {
    return this.categorySubject.asObservable();
  }

  setCategory(category: string) {
    this.categorySubject.next(category);
  }
}
