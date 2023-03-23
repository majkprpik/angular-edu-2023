import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjuljComponent } from './ljulj.component';

describe('LjuljComponent', () => {
  let component: LjuljComponent;
  let fixture: ComponentFixture<LjuljComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LjuljComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LjuljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
