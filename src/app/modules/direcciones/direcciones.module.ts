import { CommonModule } from '@angular/common';
import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';
import { NgModule } from '@angular/core';
import { StatusButtonComponent } from '../../shared/status-button/status-button.component';

@NgModule({
  declarations: [
    DireccionesComponent,
    DireccionDetailComponent,
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    StatusButtonComponent
  ]
})
export class DireccionesModule { }
