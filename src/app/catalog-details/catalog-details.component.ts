import { Component, OnInit } from '@angular/core';
import { CatalogDetailsService } from "../shared/catalogdetails/catalog-details.service"
import { catalogDetails } from '../shared/catalogdetails/catalogDetails.model';


@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
  moive : catalogDetails = null;

  constructor(private CatalogDetailsService: CatalogDetailsService) {

  }
  ngOnInit(): void {
   const temp =  JSON.parse(localStorage.getItem("moiveDetails"));
   this.moive = new catalogDetails(temp.language,temp.title,temp.vote_average,temp.vote_count,temp.overview,temp.imageUrl,temp.release_date)
console.log("line18",typeof(this.moive));
  // this.moive = this.CatalogDetailsService.moive

  }
}