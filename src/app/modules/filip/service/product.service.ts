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
      price: 100,
      id: 1,
      imgURL:
        '../../../../assets/filip-tod/produkti/63dd68a15d8fe1c9ccd0c751_135.jpg',
    },

    {
      name: 'product2',
      price: 150,
      id: 2,
      imgURL: '../../../../assets/filip-tod/produkti/lb4.png',
    },

    {
      name: 'product3',
      price: 120,
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
      price: 150,
      id: 5,
      imgURL:
        '../../../../assets/filip-tod/produkti/zion-2-noah-basketball-shoes-cpQftP.jpeg',
    },

    {
      name: 'Kobe 6',
      price: 500,
      id: 6,
      imgURL:
        '../../../../assets/filip-tod/produkti/kobe6.jpeg',
    },

    {
      name: 'product7',
      price: 120,
      id: 7,
      imgURL:
        '../../../../assets/filip-tod/produkti/zion-2-noah-basketball-shoes-cpQftP.jpeg',
    },

    {
      name: 'PG',
      price: 90,
      id: 8,
      imgURL:
        '../../../../assets/filip-tod/produkti/paul-george-6.jpg',
    },

    {
      name: 'PG',
      price: 110,
      id: 9,
      imgURL:
        '../../../../assets/filip-tod/produkti/PG4-shoe.jpg',
    },

    {
      name: 'LBJ 12',
      price: 350,
      id: 10,
      imgURL:
        '../../../../assets/filip-tod/produkti/lebron-james-12-a.jpg',
    },

    {
      name: 'Under armour jet 21',
      price: 120,
      id: 11,
      imgURL:
        '../../../../assets/filip-tod/produkti/under-armour-jet-21-basketball-shoes.jpg',
    },

    {
      name: 'KD 10',
      price: 170,
      id: 12,
      imgURL:
        '../../../../assets/filip-tod/produkti/Nike_KD_10.jpg',
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
