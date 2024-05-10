import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DireccionesComponent } from './direcciones/direcciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesComponent, DireccionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
