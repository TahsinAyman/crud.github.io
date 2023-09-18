import { TestBed } from '@angular/core/testing';

import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';

describe('UnauthorizedInterceptorService', () => {
  let service: UnauthorizedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthorizedInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
