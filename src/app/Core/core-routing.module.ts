import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../Authentication/grads/auth.guard.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { DatePipe } from '@angular/common';


const routes: Routes = [

  {
    path: "",
    canActivate: [AuthGuardService],
    component: CatalogComponent,
   

  },
  {
    path: "catalogDetails/:id",
    canActivate: [AuthGuardService],
    component: CatalogDetailsComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes),DatePipe],
  exports: [RouterModule]

})
export class CoreRoutingModule { }
