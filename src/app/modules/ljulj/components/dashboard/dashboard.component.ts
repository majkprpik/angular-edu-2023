import { CartService } from './../../service/cart.service';
import { Cart } from './../../model/Cart';
import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
[x: string]: any;

  products: Product[] = [];
  
  cart:Cart;

  sortAscending=false;

  sliderValue=0;  
  sliderMax=26000;
  sliderMin=0;
  sliderStep=10;
  sliderValueMin=0;
  sliderValueMax=20000;

  ChangeOrder(){
    this.productService.ChangeSortOrder();
  }

  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute,private router:Router,private cartService:CartService) {
    productService.$products.subscribe((product) => {
      this.products = product;
    });
    productService.$sortAscending.subscribe((order)=>{
      this.sortAscending=order;
    })
    productService.$maximumPrice.subscribe((max)=>{
      this.sliderMax=max;
    })
    productService.$minimumPrice.subscribe((min)=>{
      this.sliderMin=min;
    })
    productService.getProducts();
    activatedRoute.data.subscribe((data)=>{
      console.log(data);
    })
    cartService.$cart.subscribe((cart)=>{
      this.cart=cart;
    })
  }

  NavigateToCart(){
    this.router.navigate(['Dino', 'Cart']);
  }

  CartDialog(){

  }
}