import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesModule } from './modules/clientes/clientes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
