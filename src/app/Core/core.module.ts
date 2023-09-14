import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogDetailsComponent,
    PageNotFoundComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule,

  ],

  exports: [
    CatalogComponent,
    CatalogDetailsComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
