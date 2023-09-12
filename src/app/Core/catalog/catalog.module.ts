import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
