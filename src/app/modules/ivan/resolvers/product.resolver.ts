import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/Product';

@Injectable()
export class ProductResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.productService.getProductsResolver();
  }
}
