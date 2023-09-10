import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  moive =null
constructor(private router: Router, private route: ActivatedRoute,public translate:TranslateService) {}
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    const currentRoute = this.route.snapshot?.routeConfig?.path;
    console.log('Current Route:', currentRoute);
    this.moive = currentRoute=="Catalog"?false:true;
  }
  logout(){
    localStorage.removeItem("userData");
    localStorage.removeItem("moiveDetails");
    this.router.navigate(['/']);


  }
}
