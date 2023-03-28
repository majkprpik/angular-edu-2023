import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgComponent } from './productg.component';

describe('ProductgComponent', () => {
  let component: ProductgComponent;
  let fixture: ComponentFixture<ProductgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
