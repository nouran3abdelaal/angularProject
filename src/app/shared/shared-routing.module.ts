import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../Core/page-not-found/page-not-found.component';


const routes: Routes = [
  
  { path: "notFound", component: PageNotFoundComponent },

  { path: "**", redirectTo: "/notFound" }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SharedRoutingModule { }