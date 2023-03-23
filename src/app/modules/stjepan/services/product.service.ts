import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );
  private apiUrl = 'https://fakestoreapi.com/products?limit=18';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getProducts() {
    this.http.get(this.apiUrl).subscribe((valueData: any) => {
      this.products = valueData.map((p: any) => {
        return { ...p, quantity: Math.floor(Math.random() * 100) };
      });
      this.$products.next(this.products);
      console.log(this.products);
    });
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProductResolver() {
    return this.http.get(this.apiUrl);
  }
}
