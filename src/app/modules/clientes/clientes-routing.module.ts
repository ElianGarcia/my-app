import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'cliente/:id',
    component: ClientesDetailComponent
  },
  {
    path: 'cliente-direcciones/:direccionId',
    component: ClientesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
