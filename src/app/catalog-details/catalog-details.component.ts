import { Component, OnInit } from '@angular/core';
// import { CatalogDetailsService } from "../shared/catalogdetails/catalog-details.service"
import { catalogDetails } from '../shared/catalogdetailsModel/catalogDetails.model';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
  moive : catalogDetails = null;

  constructor() {

  }
  ngOnInit(): void {
   const temp =  JSON.parse(localStorage.getItem("moiveDetails"));
   if (temp && temp.language) {
    console.log(temp.language);
    this.moive = new catalogDetails(temp.language,temp.title,temp.vote_average,temp.vote_count,temp.overview,temp.imageUrl,temp.release_date)

  } else {
  }


  }
}