import { CommonModule } from '@angular/common';
import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';
import { NgModule } from '@angular/core';
import { StatusButtonComponent } from '../../shared/status-button/status-button.component';
import { ItemNotFoundComponent } from '../../shared/item-not-found/item-not-found.component';
import { DireccionService } from '../../services/direccion.service';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';

@NgModule({
  declarations: [
    DireccionesComponent,
    DireccionDetailComponent,
    DireccionFormComponent,
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    StatusButtonComponent,
    ItemNotFoundComponent,
    ReactiveFormsModule
  ],
  exports: [
    DireccionDetailComponent
  ],
  providers: [
    DireccionService,
    ClientesService
  ]
})
export class DireccionesModule { }
