import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe,
    CommonModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
