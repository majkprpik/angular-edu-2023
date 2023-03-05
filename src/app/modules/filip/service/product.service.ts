import { Product } from './../models/product';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {

  products: Product[]= [{name:'product1', 
  price: 1000,
  id: 1,
  imgURL: "../../../../assets/filip-tod/produkti/63dd68a15d8fe1c9ccd0c751_135.jpg"},

  {name:'product2', 
  price: 799,
  id: 2,
  imgURL: "../../../../assets/filip-tod/produkti/lb4.png"},


];


  $products = new BehaviorSubject<Product[]>(this.products);

  constructor() { }
}
