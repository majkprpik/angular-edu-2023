import { CartServiceService } from './../../services/cart-service.service';
import {
  SliderValues,
  ProductServiceService,
} from './../../services/product-service.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-samsungs',
  templateUrl: './samsungs.component.html',
  styleUrls: ['./samsungs.component.scss'],
})
export class SamsungsComponent {
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  sliderValue: SliderValues;
  phones: any = [];
  models = ['Galaxy A6', 'Galaxy Core 2', 'Galaxy Young 2'];
  images = [
    'assets/tihomir/Samsung/SamsungGalaxyA6.png',
    'assets/tihomir/Samsung/SamsungGalaxyCore2.png',
    'assets/tihomir/Samsung/SamsungGalaxyYoung2.jpg',
    'assets/tihomir/Samsung/SamsungGalaxyYoung.jpg',
    'assets/tihomir/Samsung/SamsungGalaxyJ4.jpg',
    'assets/tihomir/Samsung/GalaxyA5.jpg',
  ];
  prices = [300, 400, 200, 150, 350, 500];
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
      this.phones = phones.filter((phone) => phone.name === 'Samsung');
    });

    for (let i = 0; i < this.phones.length; i++) {
      this.phones[i].model = this.models[i];
      this.phones[i].price = this.prices[i];
      this.phones[i].imageURL = this.images[i];
      this.phones[i].description =
        'The brand new ' +
        this.phones[i].name +
        ' with a super fast ' +
        this.phones[i].CPU +
        ' and  ' +
        this.phones[i].RAM +
        ' starting at only ' +
        this.phones[i].price +
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
