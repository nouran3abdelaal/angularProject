import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FetchMoiveService implements OnInit {

 userId='';
  constructor(private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    
    //   this.userId = params['id'];
    // }
    // )
  }
//https://api.themoviedb.org/3/movie/615656?api_key=15589cd5a2d1224bff485d7f200ef63d


  fetchPosts(userId){
   return this.http.get(`https://api.themoviedb.org/3/movie/${userId}?api_key=15589cd5a2d1224bff485d7f200ef63d`);
}
}