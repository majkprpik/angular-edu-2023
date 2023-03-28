import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGsComponent } from './lgs.component';

describe('LGsComponent', () => {
  let component: LGsComponent;
  let fixture: ComponentFixture<LGsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LGsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LGsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
