import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';
import { ShortenTextPipe } from 'src/app/shared/pipes/shorten-text.pipe';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent, 
   

  ],
  imports: [
    HttpClientModule,
    RouterModule,
    SharedModule
    
  ],
  exports:[
    CatalogComponent, 
    

  ]
})
export class CatalogModule { }
