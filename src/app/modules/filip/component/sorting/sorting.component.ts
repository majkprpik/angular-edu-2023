import { Product } from './../../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  products: Product[] = [];

  sortAscending = true;

  sortOrderChanged(ascending: boolean) {
    this.sortAscending = ascending;
  }
}
