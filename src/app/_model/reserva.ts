import { Cliente } from './cliente';
import { CampoDeportivo } from './campoDeportivo';
import { Estado } from './estado';
export class Reserva{
        idReserva: number;
        campoDeportivo: CampoDeportivo;
        cliente: Cliente;
        fecha: string;
        hora: string;
        tiempo:string;
        precio: number;
        estado: Estado;
}