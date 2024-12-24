import { TestBed } from '@angular/core/testing';

import { FarmerserviceService } from './farmerservice.service';

describe('FarmerserviceService', () => {
  let service: FarmerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
