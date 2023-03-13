import { CartService } from './../../services/cart.service';
import { Product } from './../../models/Product';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product:Product;
  
  /**
   *
   */
  constructor(private cartService:CartService) {
    
  }

  AddToCart(){
    this.cartService.AddItem(this.product);
  }
}
