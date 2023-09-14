import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './Authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './Core/core-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CoreRoutingModule,
    SharedRoutingModule,
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

