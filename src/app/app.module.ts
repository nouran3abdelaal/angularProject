import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './Core/core.module';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { AuthenticationModule } from './Authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    AppRoutingModule,
   CoreModule,
   AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

