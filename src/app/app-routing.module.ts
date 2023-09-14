import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthGuardLoginService } from './Authentication/grads/auth.guard.login.service';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';


const routes: Routes = [
  { path: "",canActivate:[AuthGuardLoginService], component: LoginComponent },
  { path: "register",canActivate:[AuthGuardLoginService], component: SignUpComponent },
  { path: "catalog", loadChildren:()=>import( "./Core/core.module" ).then(m=>m.CoreModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
