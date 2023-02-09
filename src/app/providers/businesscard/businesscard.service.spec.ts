import { TestBed } from '@angular/core/testing';

import { BusinesscardService } from './businesscard.service';

describe('BusinesscardService', () => {
  let service: BusinesscardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesscardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
