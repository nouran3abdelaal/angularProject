import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FetchMoiveService implements OnInit {

  moiveID = '';
  constructor(private http: HttpClient, private route: ActivatedRoute, private CookieService:CookieService) { }

  ngOnInit(): void {

  }


  fetchPosts(moiveID) {
    const jwtToken = this.CookieService.get('jwtToken');

       const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
       console.log(environment.backendURLID+moiveID);

    return this.http.get(environment.backendURLID+moiveID,{headers});
  }
}