import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-detail',
  standalone: true,
  imports: [],
  templateUrl: './cliente-detail.component.html',
  styleUrl: './cliente-detail.component.css'
})
export class ClienteDetailComponent {
  cliente : Cliente = new Cliente();

  clientes : Cliente[] = [
    {
      clienteId: 0, name: "Enmanuel", lastName: "Suarez", cedula: "064-5948452-8", birthDate: new Date("1998-03-26"), createAt: new Date("2024-03-26"), email: "emsuarez@example.com", active: true
    },
    {
      clienteId: 1, name: "Pascual", lastName: "Garcia", cedula: "064-5948452-8", birthDate: new Date("1998-03-26"), createAt: new Date("2024-03-26"), email: "pgarcia@example.com", active: false
    }
  ]

  constructor(private route : ActivatedRoute){
    this.route.params.subscribe((params) => {
      if(params['id']){
        this.cliente = this.clientes.find(x => x.clienteId == params['id']);
      }
    })
  }
}