import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { ApiService } from '../api.service';
// import { Product } from './../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  // year: number;
  // model: string;
  // category: string;
  // id: string;

  // products: Product[] = [];

  // $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
  //   this.products
  // );

  // constructor(private apiService: ApiService, private router: Router) {
  //   this.fetchProducts();
  // }

  // fetchProducts() {
  //   this.apiService.getListOfFerrariModels().subscribe((res) => {
  //     console.log(res);
  //     if (res.success === true) {
  //       this.products = res.data;
  //       console.log(this.products);
  //       this.year = res.data.year;
  //       this.model = res.data.model;
  //       this.category = res.data.category;
  //       this.id = res.data.id;
  //     } else this.products = [];
  //   });
  // }
}
