import { LogingService } from '../../services/loging.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private router: Router, private LogingService: LogingService, public translate: TranslateService) { }
  ngOnInit(): void {
  }


  onSubmit() {
    this.uniqueEmail = true;

    
    this.userData.email = this.siginForm.value.email;
    this.userData.password = this.siginForm.value.password;
    const userName = this.LogingService.login(this.userData);

    if (userName != "false") {
      this.userData.name = userName;
      localStorage.setItem("userData", JSON.stringify(this.userData));
      this.router.navigate(['/Catalog']);
    }
    else {
      console.log("false");
      this.error = true;

    }
   


  }
  RemovePopUpScreen() {
    this.error = false;
    this.siginForm.reset();

  }
  signUpActivate() {
    this.router.navigate(['/Register']);

  }

}
