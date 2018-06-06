
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ingresoentity } from '../parqueadero.entity/ingreso';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class FacturarService {
    factura;
  constructor(private http:HttpClient) { }
    
   salidaregistro(placa: String): Observable<any>{
    return this.http.post("http://localhost:9066/factura/salida", placa);
  }

 
}

