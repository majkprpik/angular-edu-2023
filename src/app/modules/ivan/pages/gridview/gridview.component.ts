import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../../services/flower.service';
import { ProductService } from '../../services/product.service';
import { Flower } from '../../shared/Flower';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss'],
})
export class GridviewComponent {
  @Input() flower: Flower
  @Input() product: Product
  flowers: any[] = [];
  products: any[] = []

  constructor(
    private flowerService: FlowerService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.flowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers
    })
    this.productService.$products.subscribe((products) => {
      this.products = products
  
    })

  }
}
