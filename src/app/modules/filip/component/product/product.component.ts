import { KartService } from './../../service/kart.service';
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


constructor(private productService: ProductService, private cartService: KartService){
  this.productService.$products.subscribe((data)=>{
    this.sviProducti=data
  })
  this.productService.$sortAscending.subscribe((data)=>{
    this.sortAscending=data
  })
}
//servis za pipe
 addToCart(product: Product){
this.cartService.addItem(product)

 }
products: Product[] = [];

sortAscending = true;




// Product u "model-products" nije importan
}
