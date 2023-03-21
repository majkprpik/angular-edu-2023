import { StorageService } from './../../services/storage.service';
import { cart } from './../../models/Cart';
import { CartService } from './../../services/cart.service';
import { Product } from './../../models/Products';
import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { round } from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: cart;
  
  constructor(private activatedRoute: ActivatedRoute, private router:
    Router, private cartService: CartService,
    private product: ProductService, private storageService: StorageService) {
      this.cartService.$cart.subscribe((data) => {
        this.cart = data;
      });
      
  }

  backToStore(){
    this.router.navigate(['my-module15','dashboard']);
  }

  getTotal(){
    const total = this.cartService.getTotal();
    return round(total, 2).toFixed(2);
  }

  customRound(num1:number, num2:number){
    return (round(num1, 2)).toFixed(2);
  }

  checkout(){}

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
  }
}
