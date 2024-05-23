import { Component, Input } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { DireccionService } from '../../../services/direccion.service';

@Component({
  selector: 'app-cliente-direcciones',
  templateUrl: './cliente-direcciones.component.html',
  styleUrl: './cliente-direcciones.component.css'
})
export class ClienteDireccionesComponent {
  direccionesCliente : Direccion[];

  constructor(private routeManager : ActivatedRoute, private _service : DireccionService) {
    
  }

  ngOnInit() {
    this.routeManager.params.subscribe((params) => {
      if(params['clienteId']){
        this._service.getAddressByClientId(+params['clienteId']).subscribe({
          next: (value) => {
            this.direccionesCliente = value
          },
          error: (error) => {
            console.error(error)
          }
        })
      }
    })
  }
}
