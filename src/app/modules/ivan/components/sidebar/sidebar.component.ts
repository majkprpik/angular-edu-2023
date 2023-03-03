import { FlowerService } from './../../services/flower.service';
import { Component } from '@angular/core';
import { Tag } from '../../shared/Tag';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 tags: Tag[];

 constructor(private FlowerService:FlowerService){
  this.tags = this.FlowerService.getTags()
 }
}
