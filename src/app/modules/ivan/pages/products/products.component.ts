import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FlowerService } from './../../services/flower.service';
import { Component } from '@angular/core';
import { Flower } from '../../shared/Flower';
import { Tag } from '../../shared/Tag';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  displayMode = 1;
  products: Product[] = [];
  flowers: Flower[] = [];
  tags: Tag[];

  constructor(private flowerService: FlowerService) {
    this.flowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers;
    });
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
