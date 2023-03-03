import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../../services/flower.service';
import { Flower } from '../../shared/Flower';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss'],
})
export class GridviewComponent {
  flowers: any[] = [];

  constructor(
    private flowerService: FlowerService,
    private route: ActivatedRoute
  ) {
    this.flowers = this.flowerService.getAllFlowers();
  }
}
