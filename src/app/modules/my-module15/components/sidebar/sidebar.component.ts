import { Product } from './../../models/Products';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  /**
   *
   */
  constructor(private router: Router,) {
 }

  allProducts(){
    this.router.navigate(['my-module15','product']);
  }
  
}
