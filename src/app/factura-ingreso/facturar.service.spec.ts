import { TestBed, inject } from '@angular/core/testing';

import { FacturarService } from './facturar.service';

describe('FacturarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturarService]
    });
  });

  it('should be created', inject([FacturarService], (service: FacturarService) => {
    expect(service).toBeTruthy();
  }));
});
