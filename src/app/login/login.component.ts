import { LogingService } from './loging.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("f") siginForm: NgForm;

  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  error = false;

  constructor(private router: Router, private LogingService: LogingService) { }


  onSubmit() {
    // console.log("hiiiiii");
    this.userData.email = this.siginForm.value.email;
    this.userData.password = this.siginForm.value.password;
    // console.log(this.LogingService.login(this.userData)+"kkkkkkk");
   
    if (this.LogingService.login(this.userData)!="false") {
      this.userData.name=this.LogingService.login(this.userData);
     
      console.log("true");
      // this.error=false;
      localStorage.setItem("userData", JSON.stringify(this.userData));
      this.router.navigate(['/Catalog']);
    }
    else {
      console.log("false");
      this.error = true;

    }
    this.siginForm.reset();
  }
  RemovePopUpScreen() {
    this.error = false;
  }


}
