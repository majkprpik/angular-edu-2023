import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvanComponent } from './ivan.component';

describe('IvanComponent', () => {
  let component: IvanComponent;
  let fixture: ComponentFixture<IvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
