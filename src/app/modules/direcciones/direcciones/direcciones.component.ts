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
  listaDirecciones: Observable<Direccion[]>;

  constructor(private _servicio : DireccionService) {

  }

  ngOnInit() {
    this.listaDirecciones = this._servicio.getDirecciones();
  }

  activar(direccion : Direccion) {
    direccion.active = true;
    this._servicio.editDireccion(direccion);
  }
  
  desactivar(direccion : Direccion) {
    direccion.active = false;
    this._servicio.editDireccion(direccion);
  }
}
