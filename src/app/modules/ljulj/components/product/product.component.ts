import { CartService } from './../../service/cart.service';
import { Product } from './../../model/product';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  CartService: any;
AddToCart() {
throw new Error('Method not implemented.');
}
  @Input() product:Product;

AddtoCart() {
  this.CartService.AddProduct(this.product);
}

}
