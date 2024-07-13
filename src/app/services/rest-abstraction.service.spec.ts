import { TestBed } from '@angular/core/testing';

import { RestAbstractionService } from './rest-abstraction.service';

describe('RestAbstractionService', () => {
  let service: RestAbstractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestAbstractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
