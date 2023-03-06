import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
sviProducti: Product[]=[];

constructor(private productService: ProductService){
  this.productService.$products.subscribe((data)=>{
    this.sviProducti=data
  })
}

// Product u "model-products" nije importan
}
