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
  listaClientes : Observable<Cliente[]>;

  constructor(private _servicio : ClientesService) {

  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() : void {
    this.listaClientes = this._servicio.getClientes();
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

