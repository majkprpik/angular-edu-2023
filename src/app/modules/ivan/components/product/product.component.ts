import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  flowers = [
    {
      name: 'bijeli1',
      imagePath: 'assets/Ivan/bijeli cvijet.jpg',
    },
    {
      name: 'bijeli2',
      imagePath: 'assets/Ivan/drugi bijeli.jpg',
    },
  ];
}
