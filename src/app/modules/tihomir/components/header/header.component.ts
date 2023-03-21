import { CartServiceService } from './../../services/cart-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  Logo = "assets/tihomir/Logos/Logo.png";
  Cart = "assets/tihomir/Cart.png";

  totalPrice : number;

  constructor(private router : Router, private cartService : CartServiceService){
    this.cartService.$cart.subscribe((cart) =>{
      this.totalPrice = cart.price;
    })
  }

  goToCart(){
    this.router.navigate(['tihomir', 'dashboard', 'cart']);
  }

  goToGridView(){
    this.router.navigate(['tihomir', 'dashboard', 'grid-view']);
  }
}
