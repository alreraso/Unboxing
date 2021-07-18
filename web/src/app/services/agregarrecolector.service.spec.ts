import { TestBed } from '@angular/core/testing';

import { AgregarrecolectorService } from './agregarrecolector.service';

describe('AgregarrecolectorService', () => {
  let service: AgregarrecolectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarrecolectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
