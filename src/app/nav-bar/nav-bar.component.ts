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
constructor(private router: Router) {}
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  }
  logout(){
    localStorage.removeItem("userData");
    this.router.navigate(['/']);


  }
}
