
import { MatSnackBar } from '@angular/material';
import { TipoclienteService } from 'src/app/_service/tipocliente.service';
import { TipoDocumento } from 'src/app/_model/tipodocumento';
import { Component, OnInit } from '@angular/core';
import { TipoCliente } from 'src/app/_model/tipocliente';
import { TipodocumentoService } from 'src/app/_service/tipodocumento.service';
import { Cliente } from 'src/app/_model/cliente';
import { ClienteService } from 'src/app/_service/cliente.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  tipoDocumentos : TipoDocumento []=[]
  tipoClientes : TipoCliente []=[]

  idTipoDocumentoSeleccionado: number;
  idTipoClienteSeleccionado: number;

  fechaSeleccionada: Date = new Date();

  nroDocumento: number;
  nombre: string;
  apellido: string;
  estado: string;
  idEstadoSeleccionado: string;

  constructor(private tipoDocumentoService:TipodocumentoService, private tipoClienteService: TipoclienteService, private clienteService: ClienteService, private snackbar:MatSnackBar ) { }

  ngOnInit() {

    this.listaTipoDocumento();
    this.listaTipoCliente();

  }

  listaTipoDocumento(){
    this.tipoDocumentoService.listar().subscribe(data=>{
      this.tipoDocumentos= data;
    })
  }
  listaTipoCliente(){
    this.tipoClienteService.listar().subscribe(data=>{
      this.tipoClientes= data;
    })
  }

aceptar(){
  let tipoDocumento = new TipoDocumento();
  tipoDocumento.id= this.idTipoDocumentoSeleccionado;
  let tipoCliente = new TipoCliente();
  tipoCliente.id= this.idTipoClienteSeleccionado


  let cliente = new Cliente();
  cliente.tipoDocumento=tipoDocumento;
  cliente.tipoCliente=tipoCliente;
  cliente.nroDocumento= this.nroDocumento;
  cliente.nombre =this.nombre;
  cliente.apellido=this.apellido;
  cliente.estado=this.idEstadoSeleccionado;

  //IZO DATE
let tzoffset=(this.fechaSeleccionada).getTimezoneOffset()* 60000;
let localISOTime =(new Date(Date.now() - tzoffset)).toISOString();
console.log(localISOTime);
cliente.fecha=localISOTime; //yyyy-mm-ddTHH:mm:ss

debugger;
this.clienteService.registrar(cliente).subscribe(()=>{
  this.snackbar.open("se registro","aviso",{duration: 2000});
  
  setTimeout(() => {
//    this.limpiarControles();
  }, 2000);
})

}
}
