import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DireccionDetailComponent } from './direccion-detail/direccion-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionesComponent
  },
  {
    path: 'direccion/:id',
    component: DireccionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
