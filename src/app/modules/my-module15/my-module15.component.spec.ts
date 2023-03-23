import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModule15Component } from './my-module15.component';

describe('MyModule15Component', () => {
  let component: MyModule15Component;
  let fixture: ComponentFixture<MyModule15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyModule15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MyModule15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
