import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CampodeportivoComponent } from './pages/campodeportivo/campodeportivo.component';
import { CampodeportivoDialogComponent } from './pages/campodeportivo/campodeportivo-dialog/campodeportivo-dialog.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoDialogComponent } from './pages/producto/producto-dialog/producto-dialog.component';
import { TipodocumentoComponent } from './pages/tipodocumento/tipodocumento.component';
import { TipoclienteComponent } from './pages/tipocliente/tipocliente.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { EstadoDialogComponent } from './pages/estado/estado-dialog/estado-dialog.component';
import { TipoclienteDialogComponent } from './pages/tipocliente/tipocliente-dialog/tipocliente-dialog.component';
import { TipodocumentoDialogComponent } from './pages/tipodocumento/tipodocumento-dialog/tipodocumento-dialog.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { VentaComponent } from './pages/venta/venta.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ReporteComponent } from './pages/reporte/reporte.component';



@NgModule({
  declarations: [
    AppComponent,
    CampodeportivoComponent,
    CampodeportivoDialogComponent,
    ProductoComponent,
    ProductoDialogComponent,
    TipodocumentoComponent,
    TipoclienteComponent,
    EstadoComponent,
    EstadoDialogComponent,
    TipoclienteDialogComponent,
    TipodocumentoDialogComponent,
    ClienteComponent,
    VentaComponent,
    ReservaComponent,
    BuscarComponent,
    ReporteComponent
    
    
  ],
  entryComponents :[CampodeportivoDialogComponent, ProductoDialogComponent, EstadoDialogComponent,TipoclienteDialogComponent,TipodocumentoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
