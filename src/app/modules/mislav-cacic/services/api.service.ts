import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getListOfFerrariModels() {
    return this.http
      .get('https://parseapi.back4app.com/classes/Car_Model_List_Ferrari')
      .pipe(map((res: any) => res));
  }
}
