import { StorageService } from './../../services/storage.service';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Product } from './../../models/Products';
import { ProductService } from './../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  
  changeMin(ev){
    this.sliderValues = {
      min : ev,
      max : this.sliderValues.max
    }
  }
  changeMax(ev){
    this.sliderValues = {
    min : this.sliderValues.min,
    max : ev
  }}

  sliderValues : {
    min: number,
    max: number
  } = {
    min : 0,
    max : 1000,
  }
  minSliderValue = 0;
  maxSliderValue = 1000;
  currentView = 'grid'; 
  viewClass = 'grid-container'; 
  sortAscending = true;

  products: Product[] = [];
  

  constructor(private productService: ProductService, private router: Router,
  private cart: CartService, private storageService: StorageService) {
    
    this.productService.getProducts();
    this.productService.$products.subscribe((data) => {
      this.products = data;
    });
  }

  category = '';

  viewCart(){
    this.router.navigate(['my-module15','cart']);
  }
  
  toggleView(view: string) {
    this.currentView = view;
    if (view === 'grid') {
      this.viewClass = 'grid-container';
    } else if (view === 'list') {
      this.viewClass = 'list-container';
    }
  }

  addToCart(product: Product){
   this.cart.addToCart(product);
   
  }

  getCartLength(){
    return this.cart.getCartLength();
  }
  
}


