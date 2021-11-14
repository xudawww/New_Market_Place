import { TestBed } from '@angular/core/testing';

import { FishOpenerService } from './fish-opener.service';

describe('FishOpenerService', () => {
  let service: FishOpenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishOpenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
