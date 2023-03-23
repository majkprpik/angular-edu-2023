import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  // url(undefined: undefined): any {
  // throw new Error('Method not implemented.');
  // }
  // products: Product[] = [];
  // $products = new BehaviorSubject<Product[]>(this.products);

  // constructor(private productService: ProductService) {
  //   this.productService.$product.subscribe(
  //     (product) => (this.products = product)
  //   );
  // }

  products: any;
  sortAscending: boolean;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService
      .getMakeupProducts()
      .subscribe((product) => (this.products = product));
    this.productService.$sortAscending.subscribe((data) => {
      this.sortAscending = data;
    });
  }

  AddToCart(product: Product) {
    this.cartService.AddItem(product);
  }

  // dogsFacts: any;

  // constructor(private api: ApiService) {
  //   this.api.getRandomDogsFact().subscribe((response) => {
  //     this.dogsFacts = response;
  //   });
  // }
}
