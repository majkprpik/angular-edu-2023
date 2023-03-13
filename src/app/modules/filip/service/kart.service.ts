import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class KartService {

  constructor( private http: HttpClient) { }


  kart :[]=[];

  $kart = new BehaviorSubject<any[]>(this.kart);

  addProductToKart(){
    this.$kart.subscribe()
  }

  removeProductFromKart(){
    
  }
}
