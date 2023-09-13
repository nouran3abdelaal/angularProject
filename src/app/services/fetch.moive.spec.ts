import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { FetchMoiveService } from './fetch-moive.service';

describe('FetchMoiveService', () => {
  let service: FetchMoiveService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchMoiveService, { provide: ActivatedRoute, useValue: {} }],
    });

    service = TestBed.inject(FetchMoiveService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch movie data asynchronously', fakeAsync(() => {
    const moiveID = 123; 
    const mockMovieData = { id: 123, title: 'Movie Title' };

    let responseData: any = null;
    service.fetchPosts(moiveID).subscribe((data) => {
      responseData = data;
    });

    const req = httpTestingController.expectOne(
      `https://api.themoviedb.org/3/movie/${moiveID}?api_key=15589cd5a2d1224bff485d7f200ef63d`
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockMovieData);

    tick();

    expect(responseData).toEqual(mockMovieData);
  }));
});
