import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Core/login/login.component';
import { AuthGuardLoginService } from './auth.guard.login.service';
import { AuthGuardService } from './auth.guard.service';
import { CatalogComponent } from './Core/catalog/catalog.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';
import { CatalogDetailsComponent } from './Core/catalog-details/catalog-details.component';


const routes: Routes = [
  { path: "",canActivate:[AuthGuardLoginService], component: LoginComponent },
  { path: "Catalog", canActivate:[AuthGuardService],component: CatalogComponent },
  { path: "CatalogDetails/:id",canActivate:[AuthGuardService], component: CatalogDetailsComponent },
  { path: "notFound", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/notFound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
