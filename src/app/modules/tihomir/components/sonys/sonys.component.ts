import { CartServiceService } from './../../services/cart-service.service';
import { SliderValues, ProductServiceService } from './../../services/product-service.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sonys',
  templateUrl: './sonys.component.html',
  styleUrls: ['./sonys.component.scss']
})
export class SonysComponent {
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  sliderValue: SliderValues;
  phones: any = [];
  models = ['Xperia-C670X', 'Xperia-X', 'Xperia-Z5'];
  images = [
    'assets/tihomir/Sony/SonyXperia-C670X.jpg',
    'assets/tihomir/Sony/SonyXperiaX.jpg',
    'assets/tihomir/Sony/SonyXperiaZ5.jpg',
  ];
  prices = [300, 500, 700];
  description: any = [];

  constructor(private productService : ProductServiceService, private cartService : CartServiceService){
    this.productService.$sliderValue.subscribe((value) => {
      this.sliderValue = value;
    });

    this.productService.$products.next(this.productService.products);
    this.productService.$products.subscribe((phones) => {
      this.phones = phones.filter((phone) => phone.name === 'Sony');
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
    if(phone.quantity == 0){
      return;
    }
    phone.quantity--;
    this.cartService.add(phone);
  }
}
