import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BackendSource } from './backendSource.servcie';


@Injectable({
  providedIn: 'root'
})
export class FetchMoiveService implements OnInit {

  moiveID = '';
  constructor(private http: HttpClient,
    //  private route: ActivatedRoute, 
     private CookieService: CookieService, private backendSource: BackendSource) { }

  ngOnInit(): void {}


  fetchPosts(moiveID) {
    let url= '';

    if (this.backendSource.backendSource === 'local') {
      url = `${environment.moiveURLWithoutType}/${moiveID}${environment.api_key}`
      return this.http.get(url);
    }

    const jwtToken = this.CookieService.get('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    console.log(environment.backendURLID + moiveID);
    url = environment.backendURLID + moiveID;
    return this.http.get(url, { headers });
  }
}