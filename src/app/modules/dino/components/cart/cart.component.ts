import { CartService } from './../../services/cart.service';
import { Product } from './../../models/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  products: Product[] = [];
  totalPrice: number;

  /**
   *
   */
  constructor(private cartService:CartService) {
    cartService.$cart.subscribe((cart)=>{
      this.products=cart.products;
      console.log(this.products)
    })
  }

}
