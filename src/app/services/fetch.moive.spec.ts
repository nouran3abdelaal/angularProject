import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FetchMoiveService } from './fetch-moive.service';
import { environment } from 'src/environments/environment';
import { BackendSource } from './backendSource.servcie';
import { Test } from './test.servcie';
import { Test2 } from './test2.servcie';
import { CookieService } from 'ngx-cookie-service';

fdescribe('FetchMoiveService', () => {
  let service: FetchMoiveService;
  let httpTestingController: HttpTestingController;
  let backendSource: BackendSource;
  let test: Test;
  let test2: Test2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        Test, Test2, CookieService
      ],
    });

    service = TestBed.inject(FetchMoiveService);
    httpTestingController = TestBed.inject(HttpTestingController);
    backendSource = TestBed.inject(BackendSource)
    // test2 = TestBed.inject(Test2)
    // test = TestBed.inject(Test)
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
    let url = ''
    if (backendSource.backendSource === 'local') {
      url = `${environment.moiveURLWithoutType}/${moiveID}${environment.api_key}`
    } else {
      url = environment.backendURLID + moiveID;
    }
    const req = httpTestingController.expectOne(
      url
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockMovieData);

    tick();

    expect(responseData).toEqual(mockMovieData);
  }));
  it('should handle HTTP error', fakeAsync(() => {
    const moiveID = '123';
  
    service.fetchPosts(moiveID).subscribe({
      next: () => fail('expected an error, not movies'),
      error: (error) => {
        console.log(error)
        expect(error.status).toBe(404); 
        expect(error.message).toContain('404');
        expect(error.error.type).toEqual('Not Found 404'); 
 
      },
    });
      const req = httpTestingController.expectOne(`${environment.moiveURLWithoutType}/${moiveID}${environment.api_key}`);
    req.error(new ErrorEvent('Not Found 404'), { status: 404 });
  
    tick(); 
  }));
  

});
