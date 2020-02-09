import { ReservaComponent } from './pages/reserva/reserva.component';
import { TipodocumentoComponent } from './pages/tipodocumento/tipodocumento.component';
import { TipoclienteComponent } from './pages/tipocliente/tipocliente.component';

import { CampodeportivoComponent } from './pages/campodeportivo/campodeportivo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { VentaComponent } from './pages/venta/venta.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ReporteComponent } from './pages/reporte/reporte.component';


const routes: Routes = [

{ path:'reserva', component: ReservaComponent }, 
{ path:'cliente', component: ClienteComponent },
{ path:'campoDeportivo', component: CampodeportivoComponent },
{ path:'estado', component: EstadoComponent },
{ path:'tipoCliente', component: TipoclienteComponent },
{ path:'tipoDocumento', component: TipodocumentoComponent},
{ path:'producto', component: ProductoComponent },
{ path:'venta', component: VentaComponent },
{ path:'buscar', component: BuscarComponent },
{ path:'reporte', component: ReporteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
