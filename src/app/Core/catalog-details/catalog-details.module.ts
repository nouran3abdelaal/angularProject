import { NgModule } from '@angular/core';
import { CatalogDetailsComponent } from './catalog-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CatalogDetailsComponent,

  ],
  imports: [
    RouterModule,
    HttpClientModule,
    SharedModule 

  ]
  ,exports:[
    CatalogDetailsComponent,
  ]
})
export class CatalogDetailsModule { }
