import { ProductsComponent } from './../components/products/products.component';
import { Product } from './../model/product';
import { HttpClient,} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  sortAscending=true;
  $sortAscending: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(this.sortAscending);

  minimumPrice=0;
  maximumPrice=1800;

  $minimumPrice: BehaviorSubject<number>= new BehaviorSubject<number>(this.minimumPrice);
  $maximumPrice: BehaviorSubject<number>= new BehaviorSubject<number>(this.maximumPrice);

  ChangeSortOrder(){
    this.sortAscending=!this.sortAscending;
    this.$sortAscending.next(this.sortAscending);
  }

  UpdateSlider(min,max){
    this.minimumPrice=min;
    this.maximumPrice=max;
    this.$minimumPrice.next(this.minimumPrice);
    this.$maximumPrice.next(this.maximumPrice);
  }

  products: Product[] = [
    {
      id: 1111,
      name: 'Gt2Pro',
      description:
        'Huawei made this watch special and long lasting.Beautiful and durable titanium casing with real sapphire glass gives it a lot of attention.',
      price: 300,
      imageUrl: 'assets/dino/gt2pro.png',
    },
    {
      id: 2222,
      name: 'Galaxy watch 5 ',
      description:
        'Samsung made this watch special and long lasting.Beautiful and great for everyday.',
      price: 400,
      imageUrl: 'assets/dino/galaxy5.webp',
    },
  ];

  $products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    this.products
  );

  allProductsUrl = 'https://dummyjson.com/products?limit=0';

  getProducts() {
    this.http.get(this.allProductsUrl).subscribe((data: any) => {
      this.products = data.products.map((product) => {
        return {
          id: product.id,
          name: product.title,
          price: Number(product.price),
          description: product.description,
          imageUrl: product.thumbnail,
        };
      });
      this.$products.next(this.products);
    });
  }
  getProductsNoSubscribe() {
    return this.http.get(this.allProductsUrl);
  }
}
  

