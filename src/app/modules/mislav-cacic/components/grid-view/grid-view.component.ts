import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/Product';
import { ProductServiceService } from './../../services/products/product-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { MislavCacicComponent } from '../../mislav-cacic.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent {
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  productData: any = [];

  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) {
    this.productData = this.productService.getProductData();

    this.productService.$ferrarimodels.subscribe((ferrarimodels) => {
      this.products = ferrarimodels;
    });
  }
}
