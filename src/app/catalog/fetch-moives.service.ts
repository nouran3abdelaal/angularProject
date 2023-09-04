import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchMoivesService {

  constructor(private http:HttpClient) { }

  fetchPosts(){
   return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=15589cd5a2d1224bff485d7f200ef63d');
}
}