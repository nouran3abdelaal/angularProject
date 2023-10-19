import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FetchMoivesService {

  constructor(private http:HttpClient, private cookieService: CookieService) { 

  }

  fetchPosts(){
    const jwtToken = this.cookieService.get('jwtToken');

   
    // Step 2: Set the token as an authorization header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);

    
   return this.http.get(environment.backendURL,{headers});
}
}