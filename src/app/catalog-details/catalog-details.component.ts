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
console.log(this.CatalogDetailsService.moive
  );
  this.moive = this.CatalogDetailsService.moive
  }
}