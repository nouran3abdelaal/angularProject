import { LogingService } from '../../services/loging.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { BackendSource } from 'src/app/services/backendSource.servcie';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  @ViewChild("form") siginForm: NgForm;

  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  error = false;
  signUpFlag = false;
  uniqueEmail = true;
  currentLang: string;

  constructor(private router: Router, private LogingService: LogingService,
    public translate: TranslateService, private cookieService: CookieService, private backendSource: BackendSource) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);


  }
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("currentLang", lang);
  }
  onSubmit() {
    this.uniqueEmail = true;


    this.userData.email = this.siginForm.value.email;
    this.userData.password = this.siginForm.value.password;
    if (this.backendSource.backendSource === 'local') {
      const userName = this.LogingService.loginlocal(this.userData);

      if (userName != "false") {
        this.userData.name = userName as string;
        localStorage.setItem("userData", JSON.stringify(this.userData));
        this.router.navigate(['/catalog']);
      }
      else {
        this.error = true;

      }
    } else {
      this.LogingService.login(this.userData).subscribe(
        (response) => {
          if (response.token) {
            console.log('User logged:', response);
            this.userData.name = response.name;

            this.cookieService.set('jwtToken', response.token);
            localStorage.setItem("userData", JSON.stringify(this.userData));
            this.router.navigate(['/catalog']);
            // }
            return response.name
          }

        },
        (error) => {
          console.error('Registration failed:', error);
          this.error = true;

          return "false"
        }


      );

    }
  }
  removePopUpScreen() {
    this.error = false;
    this.siginForm.reset();

  }
  signUpActivate() {
    this.router.navigate(['/register']);

  }

}
