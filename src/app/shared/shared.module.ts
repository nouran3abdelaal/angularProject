import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';
import { Test } from '../services/test.servcie';
import { Test2 } from '../services/test2.servcie';



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule 
  ],
  providers:[
    Test, Test2
  ],
    exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
