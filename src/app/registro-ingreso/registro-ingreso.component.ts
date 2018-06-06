import { OK } from './../parqueadero.entity/httpstatus';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { RegistroIngresoService} from './registro-ingreso.service';
import { Ingresoentity } from './../parqueadero.entity/ingreso';
import { error } from 'protractor';
import swal from 'sweetalert';


@Component({
  selector: 'app-registro-ingreso',
  templateUrl: './registro-ingreso.component.html',
  styleUrls: ['./registro-ingreso.component.sass'],
  providers:[RegistroIngresoService]
})
export class RegistroIngresoComponent implements OnInit {
private ingreso:Ingresoentity;
private isValid:boolean= true;
private  message: string="";
  constructor(private registroIngresoService:RegistroIngresoService, private router:Router) { 
    this.ingreso=new Ingresoentity();
  }

  ngOnInit() {
  }
  public save(){
    this.isValid = this.registroIngresoService.validate(this.ingreso);
    if(this.isValid){
      this.registroIngresoService.save(this.ingreso).subscribe(res => {
        swal({title: 'Factura ',
        text: ''.concat(
          `Tipo de vehiculo ${res}
          
          `)}
        );
        console.log(res);
        
          }, error =>{
            swal({
              title: 'Guardar',
              text: error.error.text
            }).then( () => {
              location.reload()
            });
          });
      } else{
      this.message="Los campos con * son obligatorios";
    }

  }

}
