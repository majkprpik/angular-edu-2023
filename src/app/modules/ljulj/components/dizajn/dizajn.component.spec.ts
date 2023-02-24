import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizajnComponent } from './dizajn.component';

describe('DizajnComponent', () => {
  let component: DizajnComponent;
  let fixture: ComponentFixture<DizajnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DizajnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizajnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
