import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../models/Product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Home Jersey',
      imgUrl: 'assets/homekit_martin.png',
      price: 300,
      desc: 'This is home jersey.',
    },
    {
      id: 2,
      name: 'Away Jersey',
      imgUrl: 'assets/awaykit_martin.png',
      price: 300,
      desc: 'This is away jersey.',
    },
    {
      id: 3,
      name: 'Third Jersey',
      imgUrl: 'assets/thirdkit_martin.jpg',
      price: 300,
      desc: 'This is third jersey.',
    },
    {
      id: 1,
      name: 'MARKO',
      imgUrl: 'assets/homekit_martin.png',
      price: 2,
      desc: 'This is home jersey.',
    },
    {
      id: 2,
      name: 'PERO',
      imgUrl: 'assets/awaykit_martin.png',
      price: 344,
      desc: 'This is away jersey.',
    },
    {
      id: 3,
      name: 'Thirdasdsay',
      imgUrl: 'assets/thirdkit_martin.jpg',
      price: 300,
      desc: 'This is third jersey.',
    },
  ];

  priceMin = 0;
  priceMax = 2000;

  $priceMin: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.priceMin
  );
  $priceMax: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.priceMax
  );

  sortUD = 'asc';

  $sortUD: BehaviorSubject<string> = new BehaviorSubject<string>(this.sortUD);

  product: Product = { id: 0, name: '', imgUrl: '' };
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  constructor(private http: HttpClient) {
    this.getRandomDog().subscribe((data: any) => {
      this.products = data.products.map((p) => {
        return {
          id: p.id,
          name: p.title,
          imgUrl: p.images[0],
          price: p.price,
          desc: p.description,
        };
      });
      this.$products.next(this.products);
    });
  }

  getRandomDog() {
    return this.http.get('https://dummyjson.com/products');
  }
}
