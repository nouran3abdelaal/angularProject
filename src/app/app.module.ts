import { DetailsGuardService } from './details.guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './NotUsedAnyMore/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth.guard.service';
import { AuthGuardLoginService } from './auth.guard.login.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [
  { path: "",canActivate:[AuthGuardLoginService], component: LoginComponent },
  { path: "Catalog", canActivate:[AuthGuardService],component: CatalogComponent },
  { path: "CatalogDetails/:id",canActivate:[AuthGuardService], component: CatalogDetailsComponent },
  { path: "notFound", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/notFound" }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    NavBarComponent,
    CatalogComponent,
    ShortenTextPipe,
    LoadingSpinnerComponent,
    CatalogDetailsComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{ 
      provide:TranslateLoader,
      useFactory: createTranslateLoader,
      deps:[HttpClient]
      }
    })

  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/il8n/','.json');
}
