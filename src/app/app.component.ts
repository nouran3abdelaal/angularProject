import { Component, OnInit } from '@angular/core';
import { LogingService } from './login/loging.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = "my-first-app";
   currentLang: string;
  constructor(private LogingService: LogingService, public translate: TranslateService){
    this.currentLang = localStorage.getItem('currentLang')||'en';
  }
  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem("currentLang",lang);
  }

  ngOnInit(): void {
  //  this.LogingService.autoLoading();
  }

 
}
