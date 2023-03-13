import { ProductServiceService } from './../../services/product-service.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  viewText = 'GRID VIEW';

  sliderValueMin = 0;
  sliderValueMax = 1200;
  sliderValue: number = 1200;

  // @Input() color: ThemePalette = "warn";

  

  constructor(private router: Router, private productService : ProductServiceService) {}

  switchView() {
    if (this.viewText == 'GRID VIEW') {
      this.viewText = 'LIST VIEW';
      this.router.navigate(['tihomir', 'dashboard', 'grid-view']);
    } else if (this.viewText == 'LIST VIEW') {
      this.viewText = 'GRID VIEW';
      this.router.navigate(['tihomir', 'dashboard', 'list-view']);
    }
  }

  onSliderChange() {
    this.productService.$sliderValue.next({
      min : this.sliderValueMin,
      max : this.sliderValueMax
    });
  }
}
