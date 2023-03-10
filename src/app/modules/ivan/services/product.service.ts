import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';

@Injectable()
export class ProductService {
  products: Product[] = [];

  private apiUrl = 'https://dummyjson.com/products?limit=10';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getProductId(id: number): Product {
    return this.getAllProducts().find((product) => product.id == id);
  }

  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  storeProducts() {
    this.route.data.subscribe((responseData: any) => {
      this.products = responseData.products.map((p) => {
        return {
          id: p.id,
          title: p.title,
          image: p.thumbnail,
          price: p.price,
        };
      });
      this.$products.next(this.products);
    });
  }

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}
