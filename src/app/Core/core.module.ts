import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../Authentication/login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



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
