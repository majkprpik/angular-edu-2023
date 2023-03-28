import { TestBed } from '@angular/core/testing';

import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { Product } from '../model/product';


Injectable ();
import { Cart } from '../model/Cart';
export class CartService {
  cart: Cart = {
    products: [],
    totalPrice: 0,
    Cartitems: [],
  };

  $cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);
  constructor() {}

  AddItem(product: Product) {
    this.cart.products.push(product);
    this.$cart.next(this.cart);
  }
  RemoveItem(productId: number) {
    const productIndex = this.cart.products.findIndex(
      (product) => product.id == productId
    );
    if (productIndex > -1) {
      this.cart.products.splice(productIndex, 1);
    }
    this.$cart.next(this.cart);
  }
}
