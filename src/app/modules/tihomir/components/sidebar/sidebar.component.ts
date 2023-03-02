import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  //fontInter = "https://fonts.googleapis.com/css?family=Inter";

  viewText = "GRID VIEW";

  constructor(private router : Router){

  }

  switchView(){

    if(this.viewText == "GRID VIEW"){
      this.viewText = "LIST VIEW";
      this.router.navigate(['tihomir', 'dashboard', 'grid-view']);
    } else if (this.viewText == "LIST VIEW"){
      this.viewText = "GRID VIEW";
      this.router.navigate(['tihomir', 'dashboard', 'list-view']);
    }
    
  }
}
