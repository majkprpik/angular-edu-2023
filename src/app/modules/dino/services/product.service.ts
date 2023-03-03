import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {
  constructor() {}

  products: Product[] = [
    {
      id: 1,
      name: 'Gt2Pro',
      description:
        'Huawei made this watch special and long lasting.Beautiful and durable titanium casing with real sapphire glass gives it a lot of attention.',
      price: 300,
      imageUrl: 'assets/dino/gt2pro.png',
    },
    {
      id: 2,
      name: 'Galaxy watch 5 ',
      description:
        'Samsung made this watch special and long lasting.Beautiful and great for everyday.',
      price: 400,
      imageUrl: 'assets/dino/galaxy5.webp',
    },
  ];

  $products:BehaviorSubject<Product[]>= new BehaviorSubject<Product[]>(this.products);
}
