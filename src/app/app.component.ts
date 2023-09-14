import { Component, OnInit } from '@angular/core';
import { LogingService } from './services/loging.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = "my-first-app";
  constructor(private LogingService: LogingService, public translate: TranslateService){
  }
 

  ngOnInit(): void {  }

 
}
