import { Product } from './../../models/Product';
import { ProductServiceService } from './../../services/products/product-service.service';
// import { Router } from '@angular/router';
import { Component } from '@angular/core';
// import { MislavCacicComponent } from '../../mislav-cacic.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {
    // this.productService.$products.subscribe((phones) => {
    //   this.products = phones;
    // });
  }
}
