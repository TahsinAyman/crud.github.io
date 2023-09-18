import { TestBed } from '@angular/core/testing';

import { ServerAvailabilityInterceptorService } from './server-availability-interceptor.service';

describe('ServerAvailabilityInterceptorService', () => {
  let service: ServerAvailabilityInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerAvailabilityInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
