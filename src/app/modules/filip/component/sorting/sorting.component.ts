import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  sortOrder: [] = [];

  constructor(private productService: ProductService) {}

  sortAscending = true;

  sortOrderChanged(ascending: boolean) {
    this.productService.$sortAscending.next(ascending);
  }
}
