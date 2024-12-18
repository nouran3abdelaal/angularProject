import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';
import { Test } from '../services/test.servcie';
import { Test2 } from '../services/test2.servcie';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe,
    TestComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule 
  ],
  providers:[
    Test, Test2
  ],
    exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ShortenTextPipe,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
