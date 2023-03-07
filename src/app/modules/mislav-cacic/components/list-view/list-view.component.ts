import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MislavCacicComponent } from '../../mislav-cacic.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  constructor(
    private mislavComponent: MislavCacicComponent,
    private router: Router
  ) {}
}
