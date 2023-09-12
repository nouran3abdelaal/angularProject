import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class FetchMoiveService implements OnInit {

  userId = '';
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


  fetchPosts(userId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${userId}?api_key=15589cd5a2d1224bff485d7f200ef63d`);
  }
}