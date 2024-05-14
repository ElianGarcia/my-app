import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'clientes',
        loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule)
    },
    {
        path: 'direcciones',
        loadChildren: () => import('./modules/direcciones/direcciones.module').then(m => m.DireccionesModule)
    }
];
