import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FetchMoiveService implements OnInit {

  moiveID = '';
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


  fetchPosts(moiveID) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${moiveID}?api_key=15589cd5a2d1224bff485d7f200ef63d`);
  }
}