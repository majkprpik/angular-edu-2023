import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TihomirComponent } from '../../tihomir.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent {
  
  //fontInter = "https://fonts.googleapis.com/css?family=Inter";
  Logo = "assets/tihomir/Logo.png";

  constructor(private tihomirComponent : TihomirComponent, private router : Router){

  }


  iphoneJPG = "assets/tihomir/iphone14pro.jpg";
  samsungJPG = "assets/tihomir/GalaxyS22.jpg";
  xiaomiJPG = "assets/tihomir/Xiaomi12S.jpg"
  huaweiJPG = "assets/tihomir/Honor70.jpg";
}
