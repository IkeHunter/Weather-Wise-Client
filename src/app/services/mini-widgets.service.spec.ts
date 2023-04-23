import { TestBed } from '@angular/core/testing';

import { MiniWidgetsService } from './mini-widgets.service';

describe('MiniWidgetsService', () => {
  let service: MiniWidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniWidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
