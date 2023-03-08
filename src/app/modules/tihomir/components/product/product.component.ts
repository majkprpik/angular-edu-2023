import { Router } from '@angular/router';
import { Product } from './../../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  constructor(private router : Router){

  }

  @Input() product: Product;

  viewPhones(){
    // if(this.product.name == "iPhone"){
    //   this.router.navigate();
    // }
  }
}
