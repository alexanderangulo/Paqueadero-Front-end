
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RegistroIngresoComponent } from './registro-ingreso/registro-ingreso.component';
import { TasaRepresentativaComponent } from './tasa-representativa/tasa-representativa.component';
import { FacturaIngresoComponent } from './factura-ingreso/factura-ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroIngresoComponent,
    TasaRepresentativaComponent,
    FacturaIngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
