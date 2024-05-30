import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionesComponent
  },
  {
    path: 'direccion/:id',
    component: DireccionDetailComponent
  },
  {
    path: 'form',
    component: DireccionFormComponent
  },
  {
    path: 'form/:id',
    component: DireccionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
