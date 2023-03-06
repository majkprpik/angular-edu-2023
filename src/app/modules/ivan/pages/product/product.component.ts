import { Product } from './../../shared/Product';
import { FlowerService } from './../../services/flower.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from '../../shared/Flower';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() flower: Flower;
  @Input() product: Product;
  flowers: Flower[] = [];
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private FlowerService: FlowerService
  ) {
    this.FlowerService.$products.subscribe((products) => {
      this.products = products;
    });
    this.FlowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers;
    });

    this.route.params.subscribe((params) => {
      if (params['id']) this.flower = FlowerService.getFlowersId(params['id']);
    });
  }
}
