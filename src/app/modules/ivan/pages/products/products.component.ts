import { FlowerService } from './../../services/flower.service';
import { Component } from '@angular/core';
import { Flower } from '../../shared/Flower';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  displayMode = 1;
  flowers:Flower[] = [];
  

  constructor(private flowerService:FlowerService, private route:ActivatedRoute, private cartService:CartService){
    this.flowerService.$flowers.subscribe((flowers) => {
      this.flowers = flowers
    })
    this.route.params.subscribe(params => {
      if(params["tag"])
      this.flowers = this.flowerService.getAllFlowersTag(params["tag"])
    });
  }

  onDisplayModeChange(mode:number): void {
    this.displayMode = mode
  }


  





 

}
