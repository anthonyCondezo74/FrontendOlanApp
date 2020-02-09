import { TipoDocumento } from 'src/app/_model/tipodocumento';
import { TipoCliente } from './tipocliente';
export class Cliente{
    idCliente: number;
    tipoCliente: TipoCliente;
    tipoDocumento: TipoDocumento;
    nroDocumento: number;
    nombre: string;
    apellido: string;
    estado: string;
    fecha: string;
}