import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartinComponent } from './martin.component';

describe('MartinComponent', () => {
  let component: MartinComponent;
  let fixture: ComponentFixture<MartinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
