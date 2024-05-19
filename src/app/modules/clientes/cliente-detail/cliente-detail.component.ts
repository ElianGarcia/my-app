import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrl: './cliente-detail.component.css'
})
export class ClienteDetailComponent {
  client: Observable<Cliente>;

  constructor(private routeManager: ActivatedRoute, private _servicio: ClientesService) {

  }

  ngOnInit() {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this.client = this._servicio.getClienteById(+params['id']);
      }
    })
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
