import { Router } from '@angular/router';
import {
  ProductServiceService,
  SliderValues,
} from './../../services/product-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent {
  Logo = 'assets/tihomir/Logo.png';

  sliderValue: SliderValues;
  productData: any = [];

  products = [
    {
      img: 'assets/tihomir/Apple.jpg',
      name: 'iPhone',
    },
    {
      img: 'assets/tihomir/Samsung.jpg',
      name: 'Samsung',
    },
    {
      img: 'assets/tihomir/LG.png',
      name: 'LG',
    },
    {
      img: 'assets/tihomir/Sony.jpg',
      name: 'Sony',
    },
  ];

  constructor(private productService: ProductServiceService, private router: Router) {
    this.productService.$sliderValue.subscribe((value) => {
      this.sliderValue = value;
    });
  }

  viewPhones(name: string) {
    if (name == 'iPhone') {
      this.router.navigate(['tihomir', 'dashboard', 'i-phones']);
    } else if (name == 'Samsung') {
      this.router.navigate(['tihomir', 'dashboard', 'samsungs']);
    } else if (name == 'LG') {
      this.router.navigate(['tihomir', 'dashboard', 'lgs']);
    } else if (name == 'Sony') {
      this.router.navigate(['tihomir', 'dashboard', 'sonys']);
    }
  }
}
