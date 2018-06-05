import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaIngresoComponent } from './factura-ingreso.component';

describe('FacturaIngresoComponent', () => {
  let component: FacturaIngresoComponent;
  let fixture: ComponentFixture<FacturaIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
