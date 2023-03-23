import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StjepanComponent } from './stjepan.component';

describe('StjepanComponent', () => {
  let component: StjepanComponent;
  let fixture: ComponentFixture<StjepanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StjepanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StjepanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
