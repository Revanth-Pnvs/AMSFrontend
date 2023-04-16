import { TestBed } from '@angular/core/testing';

import { DepositserviceService } from './depositservice.service';

describe('DepositserviceService', () => {
  let service: DepositserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
