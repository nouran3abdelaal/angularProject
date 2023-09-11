import { Component, OnInit } from '@angular/core';
import { catalogDetails } from '../../shared/catalogdetailsModel/catalogDetails.model';
import { FetchMoiveService } from './fetch-moive.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
  moive : catalogDetails = null;
  moiveTemp : any;
  userId='';

  constructor(private fectchMoive: FetchMoiveService,private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
    
      this.userId = params['id'];
    }
    )
    this.moiveTemp = this.fectchMoive.fetchPosts(this.userId).subscribe(moive => {
      this.moiveTemp = moive;
      console.log(moive)
     
    })
  }
 

  }

