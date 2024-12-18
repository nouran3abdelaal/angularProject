import { Component, OnInit } from '@angular/core';
import { catalogDetails } from '../../Models/catalogdetailsModel/catalogDetails.model';
import { FetchMoiveService } from '../../services/fetch-moive.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
  moive: catalogDetails = null;
  moiveTemp: any;
  moiveID = '';

  constructor(private fectchMoive: FetchMoiveService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getingMoiveDetails();
  }

  getingMoiveDetails() {
    this.route.params?.subscribe(params => {

      this.moiveID = params['id'];
    }
    )
    this.moiveTemp = this.fectchMoive.fetchPosts(this.moiveID)?.subscribe(moive => {
      this.moiveTemp = moive;
    })
  }

}

