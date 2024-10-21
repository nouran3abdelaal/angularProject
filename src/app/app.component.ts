import { Component, OnInit } from '@angular/core';
import { LogingService } from './services/loging.service';
import { TranslateService } from '@ngx-translate/core';
import { BackendSource } from './services/backendSource.servcie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "my-first-app";
  constructor(private backendSource: BackendSource) {
  }


  ngOnInit(): void { }
  processing(be: boolean) {
    this.backendSource.backendSource = !be ? 'local' : 'Spring';
    console.log(this.backendSource.backendSource);
    
  }

}
