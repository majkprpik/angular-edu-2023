import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @Output() viewEvent = new EventEmitter<string>();

  toCart() {
    this.router.navigate(['stjepan', 'cart']);
  }

  productView(view: string) {
    this.viewEvent.emit(view);
  }
}
