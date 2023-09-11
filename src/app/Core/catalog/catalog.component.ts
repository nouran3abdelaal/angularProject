import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetchMoivesService } from './fetch-moives.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  fetching = false;

  moives: any;
  constructor(private http: HttpClient, private fetchMoives: FetchMoivesService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.fetching = true;
    this.userData = JSON.parse(localStorage.getItem("userData"));
    console.log(JSON.parse(localStorage.getItem("userData")));
    this.fetchMoives.fetchPosts().subscribe(moive => {
      this.moives = moive;
    
      this.fetching = false;
    })

  }

 
  seeMoreMethod(moive: any) {
    
    console.log( moive.id);
    this.router.navigate(['/CatalogDetails', moive.id]);


  }
}
