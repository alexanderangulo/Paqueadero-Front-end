import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RegistroIngresoService} from './registro-ingreso.service';
import { Ingresoentity } from './../parqueadero.entity/ingreso';


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
  public save():void{
    this.isValid = this.registroIngresoService.validate(this.ingreso);
    if(this.isValid){
      this.registroIngresoService.save(this.ingreso).subscribe(res=>{
this.router.navigate(['/ingresoComponent'])
      });
    }else{
      this.message="Los campos con * son obligatorios";
    }

  }

}
