import { Component } from '@angular/core';
import { TihomirComponent } from '../../tihomir.component';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  
  fontInter = "https://fonts.googleapis.com/css?family=Inter";
  Logo = "assets/tihomir/Logo.png";

  constructor(private tihomirComponent : TihomirComponent){

  }

  switchView(){
    this.tihomirComponent.switchView();
  }

  iphoneJPG = "assets/tihomir/iphone14pro.jpg";
  samsungJPG = "assets/tihomir/GalaxyS22.jpg";
  xiaomiJPG = "assets/tihomir/Xiaomi12S.jpg"
  huaweiJPG = "assets/tihomir/Honor70.jpg";
}
