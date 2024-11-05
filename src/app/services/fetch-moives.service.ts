import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { BackendSourceService } from './backendSource.servcie';

@Injectable({
  providedIn: 'root'
})
export class FetchMoivesService {

  constructor(private http: HttpClient, private cookieService: CookieService, private backendSource: BackendSourceService) {

  }

  fetchPosts() {
    let url = '';

    if (this.backendSource.backendSource === 'local') {
      url = environment.moiveURL + environment.api_key;
      return this.http.get(url);
    }
    const jwtToken = this.cookieService.get('jwtToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    url = environment.backendURL;


    return this.http.get(url, { headers });
  }
}