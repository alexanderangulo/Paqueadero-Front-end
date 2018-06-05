import { Ingresoentity } from './../parqueadero.entity/ingreso';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  constructor(private http:HttpClient) { }
  public getingreso():Observable<Ingresoentity[]>{
    return this.http.get<Ingresoentity[]>("http://localhost:9066/listado/ingresosvehiculos");
    
  }
}
