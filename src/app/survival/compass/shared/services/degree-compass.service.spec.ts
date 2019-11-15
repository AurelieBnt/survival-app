import { TestBed } from '@angular/core/testing';

import { DegreeCompassService } from './degree-compass.service';

describe('DegreeCompassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DegreeCompassService = TestBed.get(DegreeCompassService);
    expect(service).toBeTruthy();
  });
});
