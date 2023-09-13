import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../Authentication/grads/auth.guard.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  {
    path: "",
    canActivate: [AuthGuardService],
    component: CatalogComponent,
    //  children: [ 
    //   { path: "Details/:id", component: CatalogDetailsComponent },

    // ]

  },
  {
    path: "CatalogDetails/:id",
    canActivate: [AuthGuardService],
    component: CatalogDetailsComponent
  },
  { path: "notFound", component: PageNotFoundComponent },

  { path: "**", redirectTo: "/notFound" }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CoreRoutingModule { }
