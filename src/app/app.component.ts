import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DireccionesModule } from './modules/direcciones/direcciones.module';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ClientesModule, 
    DireccionesModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
