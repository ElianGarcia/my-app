import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../services/clientes.service';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrl: './cliente-detail.component.css'
})
export class ClienteDetailComponent {
  cliente: Cliente;

  constructor(private routeManager: ActivatedRoute, private _servicio: ClientesService) {

  }

  ngOnInit() {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getClienteById(+params['id']).subscribe({
          next: (value) => {
            this.cliente = value;
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

  cambiarEstatus(cliente : Cliente) {
    cliente.active = !cliente.active;

    this._servicio.editCliente(cliente).subscribe({
      next: (value) => {
        console.log('estatus cambiado')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
