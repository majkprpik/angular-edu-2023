import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TihomirComponent } from './tihomir.component';

describe('TihomirComponent', () => {
  let component: TihomirComponent;
  let fixture: ComponentFixture<TihomirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TihomirComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TihomirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
