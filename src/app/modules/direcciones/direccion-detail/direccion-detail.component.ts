import { Component, Input } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { DireccionService } from '../../../services/direccion.service';

@Component({
  selector: 'app-direccion-detail',
  templateUrl: './direccion-detail.component.html',
  styleUrl: './direccion-detail.component.css'
})
export class DireccionDetailComponent {
  @Input() direccionParam: Direccion;

  direccion: Direccion;

  constructor(private routeManager: ActivatedRoute, private _servicio : DireccionService) {
    
  }

  ngOnInit() {
    if (this.direccionParam) {
      this.direccion = this.direccionParam;
    }
    else {
      this.getCliente()
    }
  }

  getCliente() {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getAddressById(+params['id']).subscribe({
          next: (value) => {
            this.direccion = value
          },
          error: (err) => {
            console.log(err)
          },
        })
      }
    });
  }

  cambiarEstatus(direccion : Direccion) {
    direccion.active = !direccion.active;
    this._servicio.editAddress(direccion).subscribe({
      next: (value) => {
        console.log('estatus cambiado')
      },
      error: (err) => {
        console.error(err)

        if(this.direccionParam)
          this.direccionParam.active = !this.direccionParam.active
        else 
          this.getCliente()
      }
    })
  }
}
