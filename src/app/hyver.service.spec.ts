import { TestBed, inject } from '@angular/core/testing';
import { HyverService } from './hyver.service';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';


describe('HyverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          HyverService,
          MockBackend,
          BaseRequestOptions,
          {
              provide: Http,
              useFactory: (backend, options) => new Http(backend, options),
              deps: [MockBackend, BaseRequestOptions]
          }
      ]
    });
  });

  it('should be created', inject([HyverService], (service: HyverService) => {
    expect(service).toBeTruthy();
  }));
});
