import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { StatusButtonComponent } from '../../shared/status-button/status-button.component';
import { ItemNotFoundComponent } from '../../shared/item-not-found/item-not-found.component';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';
import { DireccionesModule } from '../direcciones/direcciones.module';
import { ClientesService } from '../../services/clientes.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteDetailComponent,
    ClienteDireccionesComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    StatusButtonComponent,
    ItemNotFoundComponent,
    DireccionesModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
