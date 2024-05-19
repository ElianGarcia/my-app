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
    this.listaClientes = this._servicio.getClientes();
  }

  activar(cliente : Cliente) {
    cliente.active = true;
    this._servicio.editCliente(cliente);
  }
  
  desactivar(cliente : Cliente) {
    cliente.active = false;
    this._servicio.editCliente(cliente);
  }
}
