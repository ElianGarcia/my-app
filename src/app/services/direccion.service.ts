import { Injectable } from '@angular/core';
import { Direccion } from '../models/direccion';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  direcciones: Direccion[] = [
    {
      addressId: 0,
      alias: "Casa",
      street: "123 Main St",
      city: "Ciudad Uno",
      state: "Estado Uno",
      zipCode: "12345",
      country: "País Uno",
      active: true,
      createAt: "2024-05-10",
      clienteId: 0
    },
    {
      addressId: 1,
      alias: "Trabajo",
      street: "456 Elm St",
      city: "Ciudad Dos",
      state: "Estado Dos",
      zipCode: "54321",
      country: "País Dos",
      active: true,
      createAt: "2024-05-10",
      clienteId: 1
    },
    {
      addressId: 2,
      alias: "Casa de Verano",
      street: "789 Oak St",
      city: "Ciudad Tres",
      state: "Estado Tres",
      zipCode: "67890",
      country: "País Tres",
      active: true,
      createAt: "2024-05-10",
      clienteId: 2
    },
    {
      addressId: 3,
      alias: "Oficina",
      street: "101 Pine St",
      city: "Ciudad Cuatro",
      state: "Estado Cuatro",
      zipCode: "98765",
      country: "País Cuatro",
      active: true,
      createAt: "2024-05-10",
      clienteId: 3
    },
    {
      addressId: 4,
      alias: "Apartamento",
      street: "202 Maple St",
      city: "Ciudad Cinco",
      state: "Estado Cinco",
      zipCode: "56789",
      country: "País Cinco",
      active: false,
      createAt: "2024-05-10",
      clienteId: 4
    }
  ];

  constructor() { }

  // Obtener lista de direccion
  getDirecciones(): Observable<Direccion[]> {
    return of(this.direcciones);
  }

  // Obtener lista de direccion por cliente
  getDireccionesByClientId(clienteId : number): Observable<Direccion[]> {
    const direcciones = this.direcciones.filter(d => d.clienteId === clienteId);
    return of(direcciones);
  }

  // Obtener direccion (buscado por id)
  getDireccionById(direccionId: number): Observable<Direccion | undefined> {
    const direccion = this.direcciones.find(c => c.clienteId === direccionId);
    return of(direccion);
  }

  // Editar direccion
  editDireccion(direccionData: Partial<Direccion>): Observable<Direccion | undefined> {
    const direccionIndex = this.direcciones.findIndex(d => d.addressId === direccionData.addressId);
    if (direccionIndex !== -1) {
      this.direcciones[direccionIndex] = { ...this.direcciones[direccionIndex], ...direccionData };
      return of(this.direcciones[direccionIndex]);
    } else {
      return of(undefined);
    }
  }
}
