import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { BackendSource } from './backendSource.servcie';

@Injectable({
  providedIn: 'root'
})
export class FetchMoivesService {

  constructor(private http: HttpClient, private cookieService: CookieService, private backendSource: BackendSource) {

  }

  fetchPosts() {
    if (this.backendSource.backendSource === 'local') {
      return this.http.get(environment.moiveURL);
    }
    const jwtToken = this.cookieService.get('jwtToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);


    return this.http.get(environment.backendURL, { headers });
  }
}