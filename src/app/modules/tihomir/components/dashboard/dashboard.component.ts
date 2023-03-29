import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((response) => {
      console.log(response);
    });
  }
}
