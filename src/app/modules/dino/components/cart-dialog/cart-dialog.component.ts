import { CartService } from './../../services/cart.service';
import { Product } from './../../models/Product';
import { Cart } from './../../models/Cart';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Cart,private cartService:CartService) {}

  RemoveItem(product:Product){
    this.cartService.RemoveProduct(product);
  }
}
