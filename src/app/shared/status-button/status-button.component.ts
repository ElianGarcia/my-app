import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './status-button.component.html',
  styleUrl: './status-button.component.css'
})
export class StatusButtonComponent {
  @Input() active;


}
