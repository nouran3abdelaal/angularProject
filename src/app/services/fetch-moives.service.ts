import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FetchMoivesService {

  constructor(private http:HttpClient) { 

  }

  fetchPosts(){
    
   return this.http.get(environment.moiveURL);
}
}