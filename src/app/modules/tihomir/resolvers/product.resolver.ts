import { ProductServiceService } from './../services/product-service.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductResolver implements Resolve<boolean> {
  constructor(private productService: ProductServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.productService.getProductsDataWithoutSubscribe();
  }
}
