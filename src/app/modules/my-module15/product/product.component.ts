import { Component } from '@angular/core';

interface Product{
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [
    {
      name: 'Festina watch 1',
      price: 60.99,
      imageUrl: '/assets/Teo/festina-sat.jpeg',
      description: ''
    },
    {
      name: 'Longiness watch 1',
      price: 71.99,
      imageUrl: 'assets/Teo/longiness-sat.avif',
      description: '',
    },
    {
      name: 'Longiness watch 2',
      price: 65.99,
      imageUrl: 'assets/Teo/longiness-sat2.webp',
      description: '',
    }
  ]
}
