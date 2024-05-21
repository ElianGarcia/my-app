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

  @Output() cambiarEstatus = new EventEmitter<void>();

  public onActivate() : void {
    this.cambiarEstatus.emit();
  }

  public onDeactivate() : void {
    this.cambiarEstatus.emit();
  }
}
