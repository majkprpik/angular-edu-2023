import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    // private productServiceService: ProductServiceService,
    private router: Router
  ) {
    // this.productServiceService.fetchProducts();
  }
}
