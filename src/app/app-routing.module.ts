import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthGuardLoginService } from './auth.guard.login.service';
import { AuthGuardService } from './auth.guard.service';
import { CatalogComponent } from './Core/catalog/catalog.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CatalogDetailsComponent } from './Core/catalog-details/catalog-details.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';


const routes: Routes = [
  { path: "",canActivate:[AuthGuardLoginService], component: LoginComponent },
  { path: "Register",canActivate:[AuthGuardLoginService], component: SignUpComponent },

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
