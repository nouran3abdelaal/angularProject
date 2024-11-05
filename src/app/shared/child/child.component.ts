import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button class="toggle-button" (click)="emitToggle()">Toggle Child</button>`
})
export class ChildComponent {
  @Output() toggle = new EventEmitter<void>();

  emitToggle() {
    this.toggle.emit();
  }
}
