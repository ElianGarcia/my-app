import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
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
}
