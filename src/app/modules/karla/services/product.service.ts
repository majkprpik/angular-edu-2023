import { BehaviorSubject } from 'rxjs';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // product : Product[] = [
  //   {
  //     id: '01',
  //     name: 'lipgloss',
  //     imageUrl: 'image',
  //     price: 56,
  //     description: 'lalal',
  //     quantity: 6,
  //   },
  //   {
  //     id: '0143',
  //     name: 'lipgloss 2',
  //     imageUrl: 'image',
  //     price: 8,
  //     description: 'lalal',
  //     quantity: 6,
  //   },
  // ];

  product: Product[] = [];

  $product = new BehaviorSubject<Product[]>(this.product);

  urlMakeupAPI =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx';
  getMakeupProducts() {
    return this.http.get(this.urlMakeupAPI);
  }

  // getMakeupProducts(){
  //   return this.http.get(this.urlMakeupAPI).subscribe((data:any)=>
  //   {
  //   //   this.product = data.product.map(p)=>{
  //   //     return{
  //   //       name: p.title; // npr da nas api ima title a nas propertly ima name
  //   //       imageUrl: p.img
  //   //     }
  //   //   }
  //   //
  //   console.log(data);

  // });
  // }

  sliderValueMin = 0;
  $sliderValueMin = new BehaviorSubject<number>(this.sliderValueMin);
  sortAscending = true;
  $sortAscending = new BehaviorSubject<boolean>(this.sortAscending);
}
