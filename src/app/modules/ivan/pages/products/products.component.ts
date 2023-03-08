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
  displayMode = 1;
  flowers: Flower[] = [];
  products: Product[] = [];

  constructor(
    private flowerService: FlowerService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.flowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers;
    });
    route.data.subscribe((responseData) => {
      console.log(responseData);
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
}
