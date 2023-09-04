import { TestBed } from '@angular/core/testing';

import { FetchMoivesService } from './fetch-moives.service';

describe('FetchMoivesService', () => {
  let service: FetchMoivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMoivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
