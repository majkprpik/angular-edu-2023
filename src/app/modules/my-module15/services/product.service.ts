import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/Products';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient, ) {}

  products: Product[] = [];

  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  getProducts(): void {
    this.http
      .get('https://fakestoreapi.com/products?limit=18')
      .subscribe((products2: any) => {
        this.products = products2.map((p: any) => {
          return {...p, quantity: Math.floor(Math.random()*100)}
          
        });
        this.$products.next(this.products);
        console.log(this.products);
      });
  }

  getProducts2(){
    return this.http.get('https://fakestoreapi.com/products?limit=9');
  }

  
}
