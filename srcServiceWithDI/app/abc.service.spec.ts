import { TestBed } from '@angular/core/testing';

import { ABCService } from './abc.service';

describe('ABCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ABCService = TestBed.get(ABCService);
    expect(service).toBeTruthy();
  });
});
