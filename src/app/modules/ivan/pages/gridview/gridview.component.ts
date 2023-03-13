import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/Product';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss'],
})
export class GridviewComponent {
  @Input() product: Product
  flowers: any[] = [];
  products: any[] = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productService.$products.subscribe((products) => {
      this.products = products
  
    })

  }
}
