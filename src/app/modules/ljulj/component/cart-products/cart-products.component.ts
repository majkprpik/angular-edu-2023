import { CartService } from './../../service/cart.service';
import { Product } from './../../model/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {

  @Input() product:Product;

  
  constructor(private cartService:CartService) {
    
  }

  RemoveFromCart(){
    this.cartService.RemoveItem(this.product.id);
  }
}
