import { cart } from './../../models/cart';
import { KartService } from './../../service/kart.service';
import { Component } from '@angular/core';
import { Product } from '../../models/product';


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

  deleteItems(product: Product){
    this.cartService.removeItem(product)
     }


}
