import { ProductService } from './../../services/product.service';
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
  @Input() product: Product
  @Input() flower: Flower
  flowers:Flower[] = [];
  products: Product[] = []
  
  constructor(private route:ActivatedRoute, private FlowerService:FlowerService, private productService:ProductService){
    this.FlowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers
    
    })

    this.productService.$products.subscribe((products) => {
      this.products = products
  
    })

    this.route.params.subscribe((params) => {
      if(params["id"])
      this.product = productService.getProductId(params["id"])
    })
  }
}

