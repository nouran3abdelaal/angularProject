import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgControl, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LogingService } from '../login/loging.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  // encapsulation:ViewEncapsulation.None

})
export class SignUpComponent implements OnInit {
  @ViewChild("form") siginForm: NgForm;
  @ViewChild("email") emailInput: NgControl;


  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  error = false;
  signUpFlag = false;
  uniqueEmail = true;

  constructor(private router: Router, private LogingService: LogingService, public translate:TranslateService) { }
  ngOnInit(): void {
  }


  onSubmit() {
    this.uniqueEmail=true;

    // if(this.signUpFlag){
      this.userData.email = this.siginForm.value.email;
      this.userData.password = this.siginForm.value.password;
      this.userData.name = this.siginForm.value.myName;
      if(this.LogingService.checkEmail(this.userData.email)){
        this.uniqueEmail=false;
        this.emailInput.reset();
        // this.uniqueEmail=true;

        return;
      }
      this.LogingService.signUp(this.userData);
      return this.router.navigate(['/']);
       // }
    // else{
    //   this.userData.email = this.siginForm.value.email;
    //   this.userData.password = this.siginForm.value.password;
    //   const userName = this.LogingService.login(this.userData);
  
    //   if ( userName!= "false") {
    //     this.userData.name = userName;
    //     localStorage.setItem("userData", JSON.stringify(this.userData));
    //     this.router.navigate(['/Catalog']);
    //   }
    //   else {
    //     console.log("false");
    //     this.error = true;
  
    //   }
      // if(this.uniqueEmail){
      //   this.siginForm.reset();

      // }
    // }
  }
  
  RemovePopUpScreen() {
    this.error = false;
  }
  loginActivate() {
    this.router.navigate(['/']);

  }

}



