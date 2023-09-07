import { LogingService } from './loging.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("f") siginForm: NgForm;

  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  error = false;
  signUpFlag = false;
  uniqueEmail = true;

  constructor(private router: Router, private LogingService: LogingService) { }
  ngOnInit(): void {
  }


  onSubmit() {
    this.uniqueEmail=true;

    if(this.signUpFlag){
      this.userData.email = this.siginForm.value.email;
      this.userData.password = this.siginForm.value.password;
      this.userData.name = this.siginForm.value.myName;
      if(this.LogingService.checkEmail(this.userData.email)){
        this.uniqueEmail=false;
        return;
      }
      this.LogingService.signUp(this.userData);
      this.signUpActivate()
      return this.router.navigate(['/']);
        }
    else{
      this.userData.email = this.siginForm.value.email;
      this.userData.password = this.siginForm.value.password;
      const userName = this.LogingService.login(this.userData);
  
      if ( userName!= "false") {
        this.userData.name = userName;
        localStorage.setItem("userData", JSON.stringify(this.userData));
        this.router.navigate(['/Catalog']);
      }
      else {
        console.log("false");
        this.error = true;
  
      }
      if(this.uniqueEmail){
        this.siginForm.reset();

      }
    }
    
  }
  RemovePopUpScreen() {
    this.error = false;
  }
  signUpActivate() {
    this.signUpFlag = !this.signUpFlag;
   




  }

}
