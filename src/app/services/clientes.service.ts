import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[] = [
    {
      clienteId: 0, name: "Enmanuel", lastName: "Suarez", cedula: "064-5948452-8", birthDate: new Date("1998-03-26"), createAt: new Date("2024-03-26"), email: "emsuarez@example.com", active: true
    },
    {
      clienteId: 1, name: "Pascual", lastName: "Garcia", cedula: "064-5948452-8", birthDate: new Date("1998-03-26"), createAt: new Date("2024-03-26"), email: "pgarcia@example.com", active: false
    },
    {
      clienteId: 2, name: "Juan", lastName: "Perez", cedula: "064-5946452-8", birthDate: new Date("2005-03-26"), createAt: new Date("2024-03-26"), email: "jperez@example.com", active: false
    }
  ];

  constructor() { }

  // Obtener lista de clientes
  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  // Obtener cliente (buscado por id)
  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    const cliente = this.clientes.find(c => c.clienteId === clienteId);
    return of(cliente);
  }

  // Editar cliente
  editCliente(clienteData: Partial<Cliente>): Observable<Cliente | undefined> {
    const clienteIndex = this.clientes.findIndex(c => c.clienteId === clienteData.clienteId);
    if (clienteIndex !== -1) {
      this.clientes[clienteIndex] = { ...this.clientes[clienteIndex], ...clienteData };
      return of(this.clientes[clienteIndex]);
    } else {
      return of(undefined);
    }
  }  
}
