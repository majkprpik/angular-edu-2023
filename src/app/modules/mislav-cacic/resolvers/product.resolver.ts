import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductServiceService } from './../services/products/product-service.service';

@Injectable()
export class ProductResolver implements Resolve<boolean> {
  
  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.productService.getProductsDataWithoutSubscribe();
  }
}
