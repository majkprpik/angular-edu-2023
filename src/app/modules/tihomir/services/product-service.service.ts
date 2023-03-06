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
      logo : "assets/tihomir/appleLogo.png",
      description : "iPhone 14 Pro",
      price : 1000
    },
    {
      id : 2,
      name : "Samsung",
      imageURL : "assets/tihomir/GalaxyS22.jpg",
      logo : "assets/tihomir/samsungLogo.png",
      description : "Samsung Galaxy S22",
      price : 1000
    }, 
    {
      id : 3,
      name : "Huawei",
      imageURL : "assets/tihomir/Honor70.jpg",
      logo : "assets/tihomir/huaweiLogo.png",
      description : "Honor 70",
      price : 1000
    },
    {
      id : 4,
      name : "Xiaomi",
      imageURL : "assets/tihomir/Xiaomi12S.jpg",
      logo : "assets/tihomir/xiaomiLogo.png",
      description : "Xiaomi 12S",
      price : 1000
    }
  ];

  $phones = new BehaviorSubject<Product[]>(this.phones);
  
  constructor() { }
}
