import { TestBed } from '@angular/core/testing';

import { OverallCasesService } from './overall-cases.service';

describe('OverallCasesService', () => {
  let service: OverallCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverallCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
