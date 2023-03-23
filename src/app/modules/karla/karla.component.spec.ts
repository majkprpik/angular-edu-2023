import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarlaComponent } from './karla.component';

describe('KarlaComponent', () => {
  let component: KarlaComponent;
  let fixture: ComponentFixture<KarlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KarlaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KarlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
