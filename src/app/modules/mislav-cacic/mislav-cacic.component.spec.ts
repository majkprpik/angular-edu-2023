import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MislavCacicComponent } from './mislav-cacic.component';

describe('MislavCacicComponent', () => {
  let component: MislavCacicComponent;
  let fixture: ComponentFixture<MislavCacicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MislavCacicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MislavCacicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
