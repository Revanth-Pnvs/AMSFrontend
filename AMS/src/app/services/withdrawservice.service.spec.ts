import { TestBed } from '@angular/core/testing';

import { WithdrawserviceService } from './withdrawservice.service';

describe('WithdrawserviceService', () => {
  let service: WithdrawserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
