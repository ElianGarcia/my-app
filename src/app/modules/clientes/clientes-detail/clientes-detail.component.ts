import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-detail',
  standalone: false,
  templateUrl: './clientes-detail.component.html',
  styleUrl: './clientes-detail.component.css'
})
export class ClientesDetailComponent {
  clientes : Cliente[] = [
    {
      clienteId: 0, 
      name: "Enmanuel", 
      lastName: "Suarez", 
      cedula: "064-5948452-8", 
      birthDate: new Date("1998-03-26"),
      createAt: new Date("2024-03-26"),
      email: "emsuarez@example.com",
      active: true
    },
    {
      clienteId: 1, 
      name: "Pascual", 
      lastName: "Garcia", 
      cedula: "064-5948452-8", 
      birthDate: new Date("1998-03-26"),
      createAt: new Date("2024-03-26"),
      email: "pgarcia@example.com",
      active: false
    }
  ]

  cliente : Cliente = new Cliente();
  

  constructor(private routeManager : ActivatedRoute) {
    this.routeManager.params.subscribe((params) => {
      if(params['id']){
        this.cliente = this.clientes.find(cliente => cliente.clienteId == params['id']);
      }
    })
  }
}
