import { ProductService } from './../../services/product.service';
import { FlowerService } from './../../services/flower.service';
import { Component } from '@angular/core';
import { Flower } from '../../shared/Flower';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  displayMode = 1;
  flowers:Flower[] = [];
  products: Product[] = []
  

  constructor(private flowerService:FlowerService, private route:ActivatedRoute, private productService:ProductService){
    this.flowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers

     productService.$products.subscribe((product) => {
      this.products = product
      });
      productService.storeProducts()
    })
    this.route.params.subscribe(params => {
      if(params["tag"])
      this.flowers = this.flowerService.getAllFlowersTag(params["tag"])
    });
  }

  onDisplayModeChange(mode:number): void {
    this.displayMode = mode
  }

  

  





 

}
