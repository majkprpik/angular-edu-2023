import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<<< HEAD:src/app/modules/my-module15/components/cart/cart.component.spec.ts
      declarations: [CartComponent],
========
      declarations: [LoginComponent],
>>>>>>>> main:src/app/modules/stjepan/login/login/login.component.spec.ts
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
