import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FetchMoiveService } from './fetch-moive.service';
import { environment } from 'src/environments/environment';
import { BackendSourceService } from './backendSource.servcie';
import { Test } from './test.servcie';
import { Test2 } from './test2.servcie';
import { CookieService } from 'ngx-cookie-service';

fdescribe('FetchMoiveService', () => {
  let service: FetchMoiveService;
  let httpTestingController: HttpTestingController;
  let backendSource: BackendSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        Test, Test2, CookieService
      ],
    });

    service = TestBed.inject(FetchMoiveService);
    httpTestingController = TestBed.inject(HttpTestingController);
    backendSource = TestBed.inject(BackendSourceService)
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
    // service.fetchPosts(moiveID+1)?.subscribe((data) => {
    //   responseData = data;
    // });
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
