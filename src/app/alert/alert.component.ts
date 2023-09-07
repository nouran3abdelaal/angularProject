import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
@Input() message: string ="";
@Output() close= new EventEmitter<void>();
closeError(){
this.close.emit();
}
}

