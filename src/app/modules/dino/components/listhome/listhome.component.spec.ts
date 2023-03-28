import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhomeComponent } from './listhome.component';

describe('ListhomeComponent', () => {
  let component: ListhomeComponent;
  let fixture: ComponentFixture<ListhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListhomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
