import { Component, OnInit } from '@angular/core';

import { IngresoService } from './ingreso.service';
import { Ingresoentity } from '../parqueadero.entity/ingreso';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass'],
  providers:[IngresoService]

})
export class IngresoComponent implements OnInit {
private ingreso: Array<Ingresoentity>;
  constructor(private IngresoService:IngresoService) { }

  ngOnInit() {
    this.loadIngreso();
  }
  private loadIngreso():void{
    this.IngresoService.getingreso().subscribe(res=>{
      this.ingreso=res;
      console.log(res);
    });
  }
}
