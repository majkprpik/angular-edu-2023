import { Product } from './../shared/Product';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slider } from '../pages/products/products.component';

@Injectable()
export class ProductService {
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );
  private apiUrl = 'https://dummyjson.com/products?limit=10';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getProducts() {
    this.http.get(this.apiUrl).subscribe((valueData: any) => {
      this.products = valueData.products.map((product) => {
        return {
          id: product.id,
          name: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          category: product.category,
        };
      });
      this.$products.next(this.products);
      console.log(this.$products);
    });
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProductsResolver() {
    return this.http.get(this.apiUrl);
  }

  getOneProduct(id: number): Product {
    const productId = this.products.find((p) => {
      return p.id === id;
    });
    return productId;
  }
}
