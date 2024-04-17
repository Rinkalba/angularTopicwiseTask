import { TestBed } from '@angular/core/testing';

import { ExcelHandlingService } from './excel-handling.service';

describe('ExcelHandlingService', () => {
  let service: ExcelHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
