import { TihomirComponent } from './../../tihomir.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  fontInter = "https://fonts.googleapis.com/css?family=Inter";
  Logo = "assets/tihomir/Logo.png";
  appleLogo = "assets/tihomir/appleLogo.png";
  samsungLogo = "assets/tihomir/samsungLogo.png";
  huaweiLogo = "assets/tihomir/huaweiLogo.png";
  xiaomiLogo = "assets/tihomir/xiaomiLogo.png";

  constructor(private tihomirComponent : TihomirComponent, private router : Router){

  }


  iphoneJPG = "assets/tihomir/iphone14pro.jpg";
  samsungJPG = "assets/tihomir/GalaxyS22.jpg";
  xiaomiJPG = "assets/tihomir/Xiaomi12S.jpg"
  huaweiJPG = "assets/tihomir/Honor70.jpg";
}
