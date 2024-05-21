import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'cliente/:id',
    component: ClienteDetailComponent
  },
  {
    path: 'cliente-direcciones/:clienteId',
    component: ClienteDireccionesComponent
  },
  {
    path: 'form',
    component: ClienteFormComponent
  },
  {
    path: 'form/:id',
    component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
