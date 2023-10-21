import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { FetchMoiveService } from './fetch-moive.service';
import { environment } from 'src/environments/environment';
  
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
    service.fetchPosts(moiveID)?.subscribe((data) => {
      responseData = data;
    });

    const req = httpTestingController.expectOne(
      environment.backendURLID+moiveID
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockMovieData);

    tick();

    expect(responseData).toEqual(mockMovieData);
  }));

  
});
