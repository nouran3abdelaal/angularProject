import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgControl, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LogingService } from '../../services/loging.service';
import { BackendSource } from 'src/app/services/backendSource.servcie';

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

  currentLang: string;

  constructor(private router: Router, private LogingService: LogingService, public translate: TranslateService, private backendSource: BackendSource) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

  } ngOnInit(): void {

  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("currentLang", lang);
  }
  onSubmit() {
    this.uniqueEmail = true;

    this.userData.email = this.siginForm.value.email;
    this.userData.password = this.siginForm.value.password;
    this.userData.name = this.siginForm.value.myName;
    if (this.backendSource.backendSource === 'local') {
      if (this.LogingService.checkEmaillocal(this.userData.email)) {
        this.uniqueEmail = false;
        this.emailInput.reset();
        this.error = true;
        return;
      }
      this.LogingService.signUplocal(this.userData);

    } else {
      if (this.LogingService.checkEmail(this.userData.email).subscribe(
        (response) => {
          console.log(response);
          this.uniqueEmail = false;
          this.emailInput.reset();
          this.error = true;
          console.log("exits email");
          return;
        },
        (error) => {
          console.error('Registration 5000 failed:', error);
          return false;
        }
      )) {
        this.LogingService.signUp(this.userData);

      }
      return this.router.navigate(['/']);

    }
  }

  removePopUpScreen() {
    this.error = false;
  }
  loginActivate() {
    this.router.navigate(['/']);

  }

}



