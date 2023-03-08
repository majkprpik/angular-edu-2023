import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.getJoke;
  }

  products: Product[] = [
    {
      name: 'product1',
      price: 1000,
      id: 1,
      imgURL:
        '../../../../assets/filip-tod/produkti/63dd68a15d8fe1c9ccd0c751_135.jpg',
    },

    {
      name: 'product2',
      price: 799,
      id: 2,
      imgURL: '../../../../assets/filip-tod/produkti/lb4.png',
    },

    {
      name: 'product3',
      price: 850,
      id: 3,
      imgURL:
        '../../../../assets/filip-tod/produkti/Rebel_61599401_gold_hi-res.jpg',
    },

    {
      name: 'product4',
      price: 200,
      id: 4,
      imgURL:
        '../../../../assets/filip-tod/produkti/zion-1-basketball-shoes-s8fR3K.png',
    },

    {
      name: 'product5',
      price: 850,
      id: 5,
      imgURL:
        '../../../../assets/filip-tod/produkti/zion-2-noah-basketball-shoes-cpQftP.jpeg',
    },
  ];

  $products = new BehaviorSubject<Product[]>(this.products);

  joke: any[] = [];

  apiUrl = 'https://v2.jokeapi.dev/joke/dark';

  getJoke() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      // this.joke = data.product.map((p: any) => {
      //   return {
      //     firstLine: p.delivery,
      //     secondLine: p.setup,
      //   };
      // });
      console.log(data);
    });
  }

  getJokeWithoutSubscribe() {
    return this.http.get(this.apiUrl);
  }
}
