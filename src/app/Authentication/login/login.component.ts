import { LogingService } from '../../services/loging.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
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
     public translate: TranslateService,private cookieService: CookieService) {
    this.currentLang = localStorage.getItem('currentLang')||'en';
    this.translate.use(this.currentLang);


   }
  ngOnInit(): void {
  }

  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem("currentLang",lang);
  }
  onSubmit() {
    this.uniqueEmail = true;

    
    this.userData.email = this.siginForm.value.email;
    this.userData.password = this.siginForm.value.password;
    // const userName = 
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

    // if (userName != null ) {
    //   this.userData.name = userName;
    //   console.log('User logged:');

    //   localStorage.setItem("userData", JSON.stringify(this.userData));
    //   this.router.navigate(['/catalog']);
    // // }
    // else {
    //   this.error = true;

    // }
   


  }
  removePopUpScreen() {
    this.error = false;
    this.siginForm.reset();

  }
  signUpActivate() {
    this.router.navigate(['/register']);

  }

}
