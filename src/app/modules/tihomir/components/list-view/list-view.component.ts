import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  Logo = 'assets/tihomir/Logo.png';
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {
    // this.productService.$phones.subscribe((phones) => {
    //   this.products = phones;
    // })
  }
}
