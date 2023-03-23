import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhonesComponent } from './i-phones.component';

describe('IPhonesComponent', () => {
  let component: IPhonesComponent;
  let fixture: ComponentFixture<IPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPhonesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
