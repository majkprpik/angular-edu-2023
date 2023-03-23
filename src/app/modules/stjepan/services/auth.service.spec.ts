import { AutenService } from './auth.service';
import { TestBed } from '@angular/core/testing';

describe('AuthService', () => {
  let service: AutenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
