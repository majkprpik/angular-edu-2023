import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridhomeComponent } from './gridhome.component';

describe('GridhomeComponent', () => {
  let component: GridhomeComponent;
  let fixture: ComponentFixture<GridhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
