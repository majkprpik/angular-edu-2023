import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] = [
    {
      id: 1111,
      name: 'Gt2Pro',
      description:
        'Huawei made this watch special and long lasting.Beautiful and durable titanium casing with real sapphire glass gives it a lot of attention.',
      price: 300,
      imageUrl: 'assets/dino/gt2pro.png',
    },
    {
      id: 2222,
      name: 'Galaxy watch 5 ',
      description:
        'Samsung made this watch special and long lasting.Beautiful and great for everyday.',
      price: 400,
      imageUrl: 'assets/dino/galaxy5.webp',
    },
  ];

  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  allProductsUrl = 'https://dummyjson.com/products?limit=0';

  getProducts() {
    this.http.get(this.allProductsUrl).subscribe((data: any) => {
      this.products = data.products.map((product) => {
        return {
          id: product.id,
          name: product.title,
          price: Number(product.price),
          description: product.description,
          imageUrl: product.thumbnail,
        };
      });
      this.$products.next(this.products);
    });
  }
  getProductsNoSubscribe() {
    return this.http.get(this.allProductsUrl);
  }
}
