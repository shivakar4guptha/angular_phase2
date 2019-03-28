import { TestBed } from '@angular/core/testing';

import { DataHandleService } from './data-handle.service';

describe('DataHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHandleService = TestBed.get(DataHandleService);
    expect(service).toBeTruthy();
  });
});
