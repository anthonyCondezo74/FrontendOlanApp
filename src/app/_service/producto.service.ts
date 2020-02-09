import { Injectable } from '@angular/core';
import { Producto } from '../_model/producto';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
//  private HOST: string = 'http://localhost:9899';
  productoCambio = new Subject<Producto[]>();
  mensajeCambio = new Subject<string>();
 url: string = `${environment.HOST}/productos`;
//url: string = `${this.HOST}/productos`;
  constructor(private http : HttpClient) { }

listar(){
  return this.http.get<Producto[]>(this.url);
}

listarPorId(idProducto:number){
  return this.http.get<Producto>(`${this.url}/${idProducto}`);
}

registrar(medico:Producto){
  return this.http.post(this.url,medico)
}

modificar(medico:Producto){
  return this.http.put(this.url,medico)
}

eliminar(idProducto : number){
  return this.http.delete(`${this.url}/${idProducto}`);
}
}
