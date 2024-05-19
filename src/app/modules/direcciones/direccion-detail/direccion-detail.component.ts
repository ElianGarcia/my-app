import { Component, Input } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DireccionService } from '../../../services/direccion.service';

@Component({
  selector: 'app-direccion-detail',
  templateUrl: './direccion-detail.component.html',
  styleUrl: './direccion-detail.component.css'
})
export class DireccionDetailComponent {
  @Input() direccionParam: Direccion;

  direccion: Observable<Direccion>;

  constructor(private routeManager: ActivatedRoute, private _servicio : DireccionService) {
    
  }

  ngOnInit() {
    if (this.direccionParam) {
      this.direccion = of(this.direccionParam);
    }
    else {
      this.routeManager.params.subscribe((params) => {
        if (params['id']) {
          this.direccion = this._servicio.getDireccionById(+params['id']);
        }
      });
    }
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
