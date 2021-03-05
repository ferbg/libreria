import { TestBed } from '@angular/core/testing';

import { LibrosclickedService } from './librosclicked.service';

describe('LibrosclickedService', () => {
  let service: LibrosclickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosclickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
