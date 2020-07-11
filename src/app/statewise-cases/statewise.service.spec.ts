import { TestBed } from '@angular/core/testing';

import { StatewiseService } from './statewise.service';

describe('StatewiseService', () => {
  let service: StatewiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatewiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
