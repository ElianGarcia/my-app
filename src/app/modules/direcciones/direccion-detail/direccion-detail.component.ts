import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccion-detail',
  templateUrl: './direccion-detail.component.html',
  styleUrl: './direccion-detail.component.css'
})
export class DireccionDetailComponent {
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

  direccion : Direccion = new Direccion();

  constructor(private routeManager : ActivatedRoute) {
    this.routeManager.params.subscribe((params) => {
      if(params['id']){
        this.direccion = this.direcciones.find(direccion => direccion.clienteId == params['id']);
      }
    })
  }
}
