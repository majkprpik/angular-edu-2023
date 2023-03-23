import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isOpenKart = false;
  isOpenHome = true;

  constructor(
    private productservice: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productservice.getJoke();
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

  goToHome() {
    this.isOpenHome = true;
    this.isOpenKart = false;
  }

  goToKart() {
    this.isOpenKart = true;
    this.isOpenHome = false;
  }
}
