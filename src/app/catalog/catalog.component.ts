import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchMoivesService } from './fetch-moives.service';
import { catalogDetails } from "../shared/catalogdetailsModel/catalogDetails.model"
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


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
    // const details = new catalogDetails(moive.original_language, moive.original_title, moive.vote_average,
    //   moive.vote_count, moive.overview, moive.poster_path, moive.release_date);
    // localStorage.setItem("moiveDetails", JSON.stringify(details));

    console.log( moive.id);
    // this.router.navigate(['/CatalogDetails']);
    this.router.navigate(['/CatalogDetails', moive.id]);


  }
}
