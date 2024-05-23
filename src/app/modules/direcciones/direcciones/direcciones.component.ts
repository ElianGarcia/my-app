import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { Observable } from 'rxjs';
import { DireccionService } from '../../../services/direccion.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrl: './direcciones.component.css'
})
export class DireccionesComponent {
  direcciones: Direccion[];

  constructor(private _servicio : DireccionService) {

  }

  ngOnInit() {
    this.getDirecciones();
  }

  getDirecciones() {
    this._servicio.getAddresses().subscribe({
      next: (value) => {
        this.direcciones = value
      }
    })
  }

  cambiarEstatus(direccion : Direccion) {
    direccion.active = !direccion.active;

    this._servicio.editAddress(direccion).subscribe({
      next: (value) => {
        console.log('estatus cambiado')
      },
      error: (error) => {

      }
    })
  }
}
