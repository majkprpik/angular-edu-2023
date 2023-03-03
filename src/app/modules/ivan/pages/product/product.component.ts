import { FlowerService } from './../../services/flower.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from '../../shared/Flower';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  flower!:Flower;

  constructor(private activatedRoute:ActivatedRoute, private FlowerService:FlowerService){
    activatedRoute.params.subscribe((params) => {
      if(params["id"])
      this.flower = FlowerService.getFlowersId(params["id"])
    })
  }

}
