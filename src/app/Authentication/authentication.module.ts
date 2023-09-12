import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{ 
      provide:TranslateLoader,
      useFactory: createTranslateLoader,
      deps:[HttpClient]
      }
    })
  ],
  exports:[
    LoginComponent,
    SignUpComponent
  ]
  ,providers: [Location]

})
export class AuthenticationModule { }
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/il8n/','.json');
}
