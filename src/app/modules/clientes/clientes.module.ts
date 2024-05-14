import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { StatusButtonComponent } from '../../shared/status-button/status-button.component';
import { ItemNotFoundComponent } from '../../shared/item-not-found/item-not-found.component';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';
import { DireccionDetailComponent } from '../direcciones/direccion-detail/direccion-detail.component';
import { DireccionesModule } from '../direcciones/direcciones.module';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteDetailComponent,
    ClienteDireccionesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    StatusButtonComponent,
    ItemNotFoundComponent,
    DireccionesModule
  ]
})
export class ClientesModule { }
