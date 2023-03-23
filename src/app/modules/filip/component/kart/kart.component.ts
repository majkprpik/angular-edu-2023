import { cart } from './../../models/cart';
import { KartService } from './../../service/kart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss'],
})
export class KartComponent {
  cart: cart={
    productList:[],
    totalPrice:0
  } ;

  constructor(private cartService: KartService) {
    this.cartService.$cart.subscribe((data) => {
      this.cart=data;
    });
  }

  showItems() {}
}
