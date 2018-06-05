import { TestBed, inject } from '@angular/core/testing';

import { RegistroIngresoService } from './registro-ingreso.service';

describe('RegistroIngresoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroIngresoService]
    });
  });

  it('should be created', inject([RegistroIngresoService], (service: RegistroIngresoService) => {
    expect(service).toBeTruthy();
  }));
});
