import { Injectable } from '@angular/core';
import { Cliente } from '../_model/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 // private HOST: string = 'http://localhost:9899';
  clienteCambio = new Subject<Cliente[]>();
  mensajeCambio = new Subject<string>();
 url: string = `${environment.HOST}/clientes`;
 //url: string = `${this.HOST}/clientes`;
  constructor(private http : HttpClient) { }

listar(){
  return this.http.get<Cliente[]>(this.url);
}

listarPageable(p: number, s: number) {
  return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`);
}

listarPorId(idCliente:number){
  return this.http.get<Cliente>(`${this.url}/${idCliente}`);
}

registrar(cliente:Cliente){
  return this.http.post(this.url,cliente)
}

modificar(cliente:Cliente){
  return this.http.put(this.url,cliente)
}

eliminar(idCliente : number){
  return this.http.delete(`${this.url}/${idCliente}`);
}
}
