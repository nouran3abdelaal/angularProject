import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    
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

  ]
,
exports:[
  LoginComponent,
],
providers: [Location]

})
export class LoginModule { }
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/il8n/','.json');
}