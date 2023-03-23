import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sortUD: string;

  sliderValueMin: number;
  sliderValueMax: number;

  constructor(private productService: ProductService, private router: Router) {
    productService.sortUD = this.sortUD;
  }

  changeSortDesc() {
    this.productService.$sortUD.next('desc');
  }

  changeSortAsc() {
    this.productService.$sortUD.next('asc');
  }

  goToCart() {
    this.router.navigate(['martin', 'dashboard', 'cart']);
  }
}
