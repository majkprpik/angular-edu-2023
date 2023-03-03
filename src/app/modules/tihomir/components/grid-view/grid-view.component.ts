import { Product } from './../../models/product';
import { ProductServiceService } from './../../services/product-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TihomirComponent } from '../../tihomir.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent {

  Logo = "assets/tihomir/Logo.png";
  products : Product[] = [];

  constructor(private productService : ProductServiceService){

    this.productService.$phones.subscribe((phones) => {
      this.products = phones;
    });
  }
}
