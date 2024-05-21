import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../services/clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  listaClientes : Cliente[];

  constructor(private _servicio : ClientesService) {

  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() : void {
    this._servicio.getClientes().subscribe({
      next: (value) => {
        this.listaClientes = value;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  cambiarEstatus(cliente : Cliente) {
    cliente.active = !cliente.active;

    this._servicio.editCliente(cliente).subscribe({
      next: (value) => {
        console.info('editado!')
      },
      error: (err) => {
        console.log(err)
        this.getClientes();
      },
    })
  }
}

