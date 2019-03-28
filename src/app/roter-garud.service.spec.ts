import { TestBed } from '@angular/core/testing';

import { RoterGarudService } from './roter-garud.service';

describe('RoterGarudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoterGarudService = TestBed.get(RoterGarudService);
    expect(service).toBeTruthy();
  });
});
