import { CoreModule } from './Core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthGuardLoginService } from './Authentication/grads/auth.guard.login.service';
import { AuthGuardService } from './Authentication/grads/auth.guard.service';
import { CatalogComponent } from './Core/catalog/catalog.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';
import { CatalogDetailsComponent } from './Core/catalog-details/catalog-details.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';


const routes: Routes = [
  { path: "",canActivate:[AuthGuardLoginService], component: LoginComponent },
  { path: "Register",canActivate:[AuthGuardLoginService], component: SignUpComponent },

  { path: "Catalog", loadChildren:()=>import( "./Core/core.module" ).then(m=>m.CoreModule) },
  // { path: "Catalog/Details/:id", loadChildren:()=>import( "./Core/core.module" ).then(m=>m.CoreModule) },

  // { path: "Catalo  gDetails/:id",canActivate:[AuthGuardService], component: CatalogDetailsComponent },
  // { path: "notFound", component: PageNotFoundComponent },
  // { path: "**", redirectTo: "/notFound" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
