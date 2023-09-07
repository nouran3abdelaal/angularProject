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
import { HttpClientModule } from '@angular/common/http';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "Catalog", canActivate:[AuthGuardService],component: CatalogComponent },
  { path: "CatalogDetails",canActivate:[AuthGuardService,DetailsGuardService], component: CatalogDetailsComponent },
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
    
    // MatIconModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
