import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // sliderValueMin = 0;
  // sliderValueMax = 2000;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private productService: ProductService
  // ) {
  //   this.activatedRoute.data.subscribe((response) => {
  //     console.log(response);
  //   });
  // }
  // sliderValueChange() {
  //   this.productService.$priceMin.next(this.sliderValueMin);
  //   this.productService.$priceMax.next(this.sliderValueMax);
  // }
}
