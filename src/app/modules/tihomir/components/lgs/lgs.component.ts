import { CartServiceService } from './../../services/cart-service.service';
import { SliderValues, ProductServiceService } from './../../services/product-service.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lgs',
  templateUrl: './lgs.component.html',
  styleUrls: ['./lgs.component.scss']
})
export class LGsComponent {
  products: Product[] = [];
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );
  index = 0;
  sliderValue: SliderValues;
  LGs: any = [];
  models = ['K8', 'Watch Sport'];
  images = [
    'assets/tihomir/LG/LG-K8.jpg',
    'assets/tihomir/LG/LGWatchSport.jpg',
  ];
  prices = [200, 300];
  description: any = [];

  constructor(private productService : ProductServiceService, private cartService : CartServiceService){
    this.productService.$sliderValue.subscribe((value) => {
      this.sliderValue = value;
    });

    this.productService.$products.next(this.productService.products);
    this.productService.$products.subscribe((phones) => {
      this.LGs = phones.filter((phone) => phone.name === 'LG');
    });

    for (let i = 0; i < this.LGs.length; i++) {
      this.LGs[i].model = this.models[i];
      this.LGs[i].price = this.prices[i];
      this.LGs[i].imageURL = this.images[i];
      this.LGs[i].description =
        'The brand new ' +
        this.LGs[i].name +
        ' with a super fast ' +
        this.LGs[i].CPU +
        ' and  ' +
        this.LGs[i].RAM +
        ' starting at only ' +
        this.LGs[i].price +
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
