import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-not-found',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './item-not-found.component.html',
  styleUrl: './item-not-found.component.css'
})
export class ItemNotFoundComponent {
  @Input() path;
}
