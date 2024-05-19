import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() activar = new EventEmitter<void>();
  @Output() desactivar = new EventEmitter<void>();

  public onActivate() : void {
    this.activar.emit();
  }

  public onDeactivate() : void {
    this.desactivar.emit();
  }
}
