import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { RouterModule } from '@angular/router';



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
    
    
  ],exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
