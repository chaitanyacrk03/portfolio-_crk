import { TestBed } from '@angular/core/testing';

import { WheelServiceService } from './wheel-service.service';

describe('WheelServiceService', () => {
  let service: WheelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
