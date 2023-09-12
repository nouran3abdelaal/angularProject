import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDetailsComponent } from './catalog-details.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CatalogModule } from '../catalog/catalog.module';
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
