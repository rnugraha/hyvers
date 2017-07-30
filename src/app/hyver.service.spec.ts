import { TestBed, inject } from '@angular/core/testing';

import { HyverService } from './hyver.service';

describe('HyverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HyverService]
    });
  });

  it('should be created', inject([HyverService], (service: HyverService) => {
    expect(service).toBeTruthy();
  }));
});
