import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonysComponent } from './sonys.component';

describe('SonysComponent', () => {
  let component: SonysComponent;
  let fixture: ComponentFixture<SonysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SonysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SonysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
