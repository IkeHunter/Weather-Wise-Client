import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service';
import { Package } from '../models/package.model';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ApiService);

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct data', () => {
    const testData: Package = { title: 'Test Data', data: 1 };

    service.getPackage().subscribe(data =>
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne(service.baseUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  })

});
