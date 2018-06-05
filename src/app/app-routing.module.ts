import { IngresoComponent } from './ingreso/ingreso.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RegistroIngresoComponent } from './registro-ingreso/registro-ingreso.component';

const routes: Routes =[
    {path:'',redirectTo:'/IngresoComponent', pathMatch:'full'},
    {path:'appComponent',component: AppComponent},
    {path:'IngresoComponent',component: IngresoComponent},
    {path:'RegistroIngresoComponent',component: RegistroIngresoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
   
})
export class AppRoutingModule {}
