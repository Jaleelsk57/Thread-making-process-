 import { TestBed } from '@angular/core/testing';

import { CottonService } from './cotton.service';

describe('CottonService', () => {
  let service: CottonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CottonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});