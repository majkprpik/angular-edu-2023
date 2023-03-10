import { BehaviorSubject } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { FlowerService } from './../../services/flower.service';
import { Component } from '@angular/core';
import { Flower } from '../../shared/Flower';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  sliderValue: Slider = {
    min: 0,
    max: 2000,
  };

  displayMode = 1;
  selectField = 'desc';
  flowers: Flower[] = [];
  products: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(
    private flowerService: FlowerService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.flowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers;
    });
    this.productService.$products.subscribe((products) => {
      this.products = products;
    });
    route.data.subscribe((responseData) => {
      this.products = responseData['products'].products.map((p) => {
        return {
          id: p.id,
          title: p.title,
          image: p.thumbnail,
          price: p.price,
        };
      });
      this.$products.next(this.products);
    });
  }
  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  onDescend() {
    this.selectField = 'desc';
  }

  onAscend() {
    this.selectField = 'asc';
  }

  changeMin(ev) {
    this.sliderValue = {
      min: ev,
      max: this.sliderValue.max,
    };
  }
  changeMax(ev) {
    this.sliderValue = {
      min: this.sliderValue.min,
      max: ev,
    };
  }
}

export interface Slider {
  min: number;
  max: number;
}
