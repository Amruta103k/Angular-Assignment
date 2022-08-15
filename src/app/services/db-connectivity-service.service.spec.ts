import { TestBed } from '@angular/core/testing';

import { DbConnectivityServiceService } from './db-connectivity-service.service';

describe('DbConnectivityServiceService', () => {
  let service: DbConnectivityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbConnectivityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
