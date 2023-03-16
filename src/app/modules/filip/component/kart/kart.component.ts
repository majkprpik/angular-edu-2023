import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.scss']
})
export class KartComponent {
constructor(private productService: ProductService){}
}
