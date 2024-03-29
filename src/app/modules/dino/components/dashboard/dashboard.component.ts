import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from './../cart-dialog/cart-dialog.component';
import { CartService } from './../../services/cart.service';
import { Cart } from './../../models/Cart';
import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  products: Product[] = [];

  cart: Cart;

  sortAscending = true;

  sliderValue = 0;
  sliderMax = 26000;
  sliderMin = 0;
  sliderStep = 10;
  sliderValueMin = 0;
  sliderValueMax = 20000;

  ChangeOrder() {
    this.productService.ChangeSortOrder();
    //this.sortAscending=!this.sortAscending;
  }

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    public dialog: MatDialog
  ) {
    productService.$products.subscribe((product) => {
      this.products = product;
    });
    productService.$sortAscending.subscribe((order) => {
      this.sortAscending = order;
    });
    productService.$maximumPrice.subscribe((max) => {
      this.sliderMax = max;
    });
    productService.$minimumPrice.subscribe((min) => {
      this.sliderMin = min;
    });
    productService.getProducts();
    activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
    cartService.$cart.subscribe((cart) => {
      this.cart = cart;
    });
  }

  openDialog() {
    this.dialog.open(CartDialogComponent, {
      data: this.cart,
    });
  }
}
