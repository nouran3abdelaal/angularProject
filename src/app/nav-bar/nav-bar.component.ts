import { CatalogDetailsService } from './../shared/catalogdetails/catalog-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  // [x: string]: any;
  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  moive =null
constructor(private router: Router, private CatalogDetailsService: CatalogDetailsService) {}
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    this.moive = this.CatalogDetailsService.moive;
  }
  logout(){
    localStorage.removeItem("userData");
    this.router.navigate(['/']);


  }
}
