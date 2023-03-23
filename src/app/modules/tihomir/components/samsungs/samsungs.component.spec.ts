import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungsComponent } from './samsungs.component';

describe('SamsungsComponent', () => {
  let component: SamsungsComponent;
  let fixture: ComponentFixture<SamsungsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SamsungsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SamsungsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
