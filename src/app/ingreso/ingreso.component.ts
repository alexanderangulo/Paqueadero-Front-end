import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ingresoentity } from './../parqueadero.entity/ingreso';
import { Component, OnInit, Injectable } from '@angular/core';
import { IngresoService } from './ingreso.service';
import { FacturarService } from '../factura-ingreso/facturar.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.sass'],
  providers:[IngresoService]

})

export class IngresoComponent implements OnInit {
private ingreso: Array<Ingresoentity>;
  constructor(private IngresoService:IngresoService, private http: HttpClient,
     private facturarService:FacturarService,private router:Router) { }


  ngOnInit() {
    this.loadIngreso();
  }
  private loadIngreso():void{
    this.IngresoService.getingreso().subscribe(res=>{
      this.ingreso=res;
      console.log(res);
    });
  }

  public salidaregistro(Placa:String):void{
    this.facturarService.salidaregistro(Placa).subscribe(res=>{
      
      swal({title: 'Factura ',
      text: ''.concat(
        `Tipo de vehiculo ${res.idingreso.tipoVehiculo},
        Placa: ${res.idingreso.placa},
        Fecha de ingreso: ${res.idingreso.fechaIngreso},
        Fecha de salida: ${res.fechaSalida},
         Costo de Paqueadero: $${res.costo}
        `)}
      ).then( () => {
        location.reload()
      });
      
  // this.router.navigate(['/RegistroIngresoComponent']);
  // this.router.navigate(['/IngresoComponent']);
     });

}

}
