import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/Product';

// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { ApiService } from '../api.service';
// import { Product } from './../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  ferrariModels: Product[] = [
    {
      id: '',
      year: '',
      model: '',
      category: '',
      imageURL: './../../assets/images/ferrari-488-spider-convertible.png',
      price: 300000,
    },
  ];

  products: any[] = [];
  $ferrarimodels = new BehaviorSubject<Product[]>(this.products);

  productsURL =
    'https://parseapi.back4app.com/classes/Car_Model_List_Ferrari?limit=10';

  // sliderValue: SliderValues = {
  //   min: 0,
  //   max: 500000,
  // };

  // $sliderValue: BehaviorSubject<SliderValues> = new BehaviorSubject<SliderValues>(
  //   this.sliderValue
  // );

  constructor(private httpClient: HttpClient) {}

  getProductData() {
    return this.httpClient
      .get(this.productsURL, {
        headers: {
          'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z',
          'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW',
        },
      })
      .subscribe((data: any) => {
        this.products = data.results.map((data: any) => {
          return {
            id: data.objectId,
            year: data.year,
            model: data.model,
            category: data.category,

            price: data.price,
          };
        });
        console.log(this.products);
      });
  }

  getProductsDataWithoutSubscribe() {
    return this.httpClient.get(this.productsURL, {
      headers: {
        'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z',
        'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW',
      },
    });
  }
}

export interface SliderValues {
  min: number;
  max: number;
}

// id: string;
// year: number;
// model: string;
// category: string;
// imageURL: string;
// year: number;
// model: string;
// category: string;
// id: string;

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
