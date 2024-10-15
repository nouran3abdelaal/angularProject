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
  constructor(private http: HttpClient, private route: ActivatedRoute, private CookieService: CookieService, private backendSource: BackendSource) { }

  ngOnInit(): void {

  }


  fetchPosts(moiveID) {
    if (this.backendSource.backendSource === 'local') {
      return this.http.get(`https://api.themoviedb.org/3/movie/${moiveID}?api_key=15589cd5a2d1224bff485d7f200ef63d`);
    }
    const jwtToken = this.CookieService.get('jwtToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    console.log(environment.backendURLID + moiveID);

    return this.http.get(environment.backendURLID + moiveID, { headers });
  }
}