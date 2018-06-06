import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ingresoentity } from '../parqueadero.entity/ingreso';

@Injectable({
  providedIn: 'root'
})
export class RegistroIngresoService {

  constructor(private http:HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   * @param ingreso 
   */
  public validate(ingreso:Ingresoentity):boolean{
    let isValid=true;
    if(!ingreso.tipoVehiculo){
      isValid=false;
    }
    if(!ingreso.placa){
      isValid=false;
    }
   
    return isValid;
  }
  public save(ingreso:Ingresoentity): Observable<any>{
    
  return  this.http.post("http://localhost:9066/registro/addIngreso", ingreso);

}
}