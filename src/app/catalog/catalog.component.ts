import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchMoivesService } from './fetch-moives.service';
import {catalogDetails} from "../shared/catalogdetails/catalogDetails.model"
import {CatalogDetailsService} from "../shared/catalogdetails/catalog-details.service"
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
  moives : catalogDetails[] =[]

  nouran:any;

  constructor(private http:HttpClient, private fetchMoives: FetchMoivesService,
     private CatalogDetailsService : CatalogDetailsService,private router: Router){

  }

  ngOnInit(): void {
    this.fetching = true;
    this.userData = JSON.parse(localStorage.getItem("userData"));
    console.log(JSON.parse(localStorage.getItem("userData")));
    this.fetchMoives.fetchPosts().subscribe(moive=>{
      this.nouran = moive;
      // let n of this.nouran.results
      // console.log(moive);
      this.fetching =false;
    // debugger
    })

  }

//  fetchPosts(){
//  }
seeMoreMethod(nouran2:any){
   const  details  = new catalogDetails(nouran2.original_language,nouran2.original_title,nouran2.vote_average,
    nouran2.vote_count,nouran2.overview,nouran2.poster_path,nouran2.release_date);
    this.CatalogDetailsService.moive = details;
  console.log(details);
  this.router.navigate(['/CatalogDetails']);
}
}
