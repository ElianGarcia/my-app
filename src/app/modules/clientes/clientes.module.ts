import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { StatusButtonComponent } from '../../shared/status-button/status-button.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetailComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    StatusButtonComponent
  ]
})
export class ClientesModule { }
