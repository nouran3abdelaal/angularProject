import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogDetailsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    // RouterModule,
    HttpClientModule,
   
  ]

  ,exports:[
    CatalogComponent,
    CatalogDetailsComponent
  ]
})
export class CoreModule { }
