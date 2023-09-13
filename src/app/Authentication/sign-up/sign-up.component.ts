import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgControl, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LogingService } from '../../services/loging.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

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

      this.userData.email = this.siginForm.value.email;
      this.userData.password = this.siginForm.value.password;
      this.userData.name = this.siginForm.value.myName;
      if(this.LogingService.checkEmail(this.userData.email)){
        this.uniqueEmail=false;
        this.emailInput.reset();
        this.error = true;

        return;
      }
      this.LogingService.signUp(this.userData);
      return this.router.navigate(['/']);
      
    
  }
  
  RemovePopUpScreen() {
    this.error = false;
  }
  loginActivate() {
    this.router.navigate(['/']);

  }

}



