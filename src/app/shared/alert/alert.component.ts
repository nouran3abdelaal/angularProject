import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
@Input() key: string ="";
message: string ="";
@Output() close= new EventEmitter<void>();
constructor(public translate:TranslateService){}
ngOnInit() {
  this.translate.get(this.key).subscribe((translation: string) => {
    this.message = translation;
  });
}
closeError(){
this.close.emit();
}
}

