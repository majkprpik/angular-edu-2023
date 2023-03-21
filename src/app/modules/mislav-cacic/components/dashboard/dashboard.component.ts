import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((response) => {
      console.log(response);
    });
  }

  // constructor(
  //   // private productServiceService: ProductServiceService,
  //   private router: Router,
  // ) {
  //   // this.productServiceService.fetchProducts();
  // }
}
