import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (toggle)="onToggle()"></app-child>
    <p>{{ isToggled ? 'Child is ON' : 'Child is OFF' }}</p>
  `
})
export class ParentComponent {
  isToggled = false;

  onToggle() {
    this.isToggled = !this.isToggled;
  }
}
