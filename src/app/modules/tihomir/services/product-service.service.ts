import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  phones : Product[] = [
    {
      id : 1,
      name : "iPhone",
      imageURL : "assets/tihomir/iphone14pro.jpg",
      description : "NewPhone",
      price : 1000
    },
    {
      id : 2,
      name : "Samsung",
      imageURL : "assets/tihomir/GalaxyS22.jpg",
      description : "GoodPhone",
      price : 1000
    }, 
    {
      id : 3,
      name : "Huawei",
      imageURL : "assets/tihomir/Honor70.jpg",
      description : "NicePhone",
      price : 1000
    },
    {
      id : 4,
      name : "Xiaomi",
      imageURL : "assets/tihomir/Xiaomi12S.jpg",
      description : "Phone",
      price : 1000
    }
  ];

  $phones = new BehaviorSubject<Product[]>(this.phones);
  
  constructor() { }
}
