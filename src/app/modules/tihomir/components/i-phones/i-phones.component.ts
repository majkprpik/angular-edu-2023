import { CartServiceService } from './../../services/cart-service.service';
import {
  SliderValues,
  ProductServiceService,
} from './../../services/product-service.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-i-phones',
  templateUrl: './i-phones.component.html',
  styleUrls: ['./i-phones.component.scss'],
})
export class IPhonesComponent {
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  sliderValue: SliderValues;
  iPhones: any = [];
  models = ['iPhone 6S', 'iPhone 7 Plus', 'Apple Watch 8', 'Apple Watch SE'];
  images = [
    'assets/tihomir/Apple/iPhone6S.jpg',
    'assets/tihomir/Apple/iPhone7Plus.jpg',
    'assets/tihomir/Apple/AppleWatch8.jpg',
    'assets/tihomir/Apple/AppleWatchSE2.jpg',
  ];
  prices = [700, 800, 400, 300];
  description: any = [];

  constructor(
    private productService: ProductServiceService,
    private cartService: CartServiceService
  ) {
    this.productService.$sliderValue.subscribe((value) => {
      this.sliderValue = value;
    });

    this.productService.$products.next(this.productService.products);
    this.productService.$products.subscribe((phones) => {
      this.iPhones = phones.filter((phone) => phone.name === 'Apple');
    });

    for (let i = 0; i < this.iPhones.length; i++) {
      this.iPhones[i].model = this.models[i];
      this.iPhones[i].price = this.prices[i];
      this.iPhones[i].imageURL = this.images[i];
      this.iPhones[i].description =
        'The brand new ' +
        this.iPhones[i].name +
        ' with a super fast ' +
        this.iPhones[i].CPU +
        ' and  ' +
        this.iPhones[i].RAM +
        ' starting at only ' +
        this.iPhones[i].price +
        '$';
    }
  }

  addToCart(phone: any) {
    if (phone.quantity == 0) {
      return;
    }
    phone.quantity--;
    this.cartService.add(phone);
  }
}
