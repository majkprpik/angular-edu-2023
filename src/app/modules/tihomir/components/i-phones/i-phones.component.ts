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
  Logo = 'assets/tihomir/Logo.png';
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  sliderValue: SliderValues;
  iPhones: any = [];
  models = ['iPhone 6S', 'iPhone 7 Plus', 'Apple Watch 8', 'Apple Watch SE'];
  images = [
    'assets/tihomir/iPhone6S.jpg',
    'assets/tihomir/iPhone7Plus.jpg',
    'assets/tihomir/AppleWatch8.jpg',
    'assets/tihomir/AppleWatchSE2.jpg',
  ];
  prices = [700, 800, 400, 300];
  description: any = [];
  productData: any = [];

  constructor(private productService: ProductServiceService, private cartService : CartServiceService) {
    this.productService.$sliderValue.subscribe((value) => {
      this.sliderValue = value;
    });

    this.productData = this.productService.getProductData();

    this.productService.$products.next(this.productService.products);

    this.productService.$products.subscribe((phones) => {
      this.iPhones = phones.filter((phone) => phone.name === 'Apple');
    });

    console.log('iPhones lel: ');
    console.log(this.iPhones);

    for (let i = 0; i < this.iPhones.length; i++) {
      this.iPhones[i].name = this.models[i];
      this.iPhones[i].price = this.prices[i];
      this.iPhones[i].imageURL = this.images[i];
      this.iPhones[i].description =
        'The brand new ' +
        this.iPhones[i].name +
        ' with a super fast ' +
        this.iPhones[i].CPU +
        ' and  ' +
        this.iPhones[i].RAM +
        'starting at only ' +
        this.iPhones[i].price +
        '$';
    }
  }

  addToCart(phone : any){
    this.cartService.add(phone);
    
    console.log("Phone: " + phone.name + " added to cart!");
  }

}
