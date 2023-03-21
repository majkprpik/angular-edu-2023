import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  totalPrice: number;
  Cart = 'assets/mislav-cacic/Cart.png';

  constructor(private router: Router, private cartService: CartServiceService) {
    this.cartService.$cart.subscribe((cart) => {
      this.totalPrice = cart.price;
    });
  }

  cartModule() {
    this.router.navigate(['mislav-cacic', 'dashboard', 'cart']);
  }

  contactModule() {
    this.router.navigate(['mislav-cacic', 'dashboard', 'contact']);
  }
}
