import { TestBed } from '@angular/core/testing';

import { AutenService } from './auten-service.service';

describe('AutenServiceService', () => {
  let service: AutenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
