import { Component, OnInit } from '@angular/core';
import { LogingService } from './login/loging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private LogingService: LogingService){}

  ngOnInit(): void {
   this.LogingService.autoLoading();
  }

 
}
