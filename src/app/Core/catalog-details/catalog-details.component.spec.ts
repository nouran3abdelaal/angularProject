import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'; 
import { CatalogDetailsComponent } from './catalog-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of } from 'rxjs';

const translateServiceStub = {
  instant: (key: string) => key, 
  get: (key: string) => {
      return of(key);
  },
  use: (key: string) => {
      key
    }
};

@Injectable()
export class MockCanActivateGuard implements CanActivate {
  canActivate(): boolean {
    return true; 
  }
}
describe('CatalogDetailsComponent', () => {
  let component: CatalogDetailsComponent;
  let fixture: ComponentFixture<CatalogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogDetailsComponent,NavBarComponent],
      imports: [HttpClientTestingModule], 
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
,
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}, 
        },
       
        {
          provide: Router,
          useValue: {}, 
        },
        {
          provide: MockCanActivateGuard, 
          useClass: MockCanActivateGuard,
        },
        {
          provide: TranslateService,
           useValue: translateServiceStub ,

        }
      ],

    });
    fixture = TestBed.createComponent(CatalogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the movie information correctly', () => {
    component.moiveTemp = {
      original_title: 'Test Movie',
      overview: 'This is a test movie',
      releaseDate: '2023-09-12',
      original_language: 'English',
      vote_average: 7.5,
      vote_count: 100,
      poster_path: '/test-poster.jpg',
    };

    fixture.detectChanges(); 

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.card-title').textContent).toContain('Test Movie');
    expect(compiled.querySelector('.card-text:nth-child(2)').textContent).toContain('Overview:  This is a test movie');
    expect(compiled.querySelector('.card-text:nth-child(4)').textContent).toContain('Release Date: 2023-09-12');
    expect(compiled.querySelector('.card-text:nth-child(6)').textContent).toContain('Language: ENGLISH');
    expect(compiled.querySelector('.card-text:nth-child(8)').textContent).toContain('Vote Avergare: 7.5');
    expect(compiled.querySelector('.card-text:nth-child(10)').textContent).toContain('Vote Count: 100');
    expect(compiled.querySelector('img').getAttribute('src')).toContain('/test-poster.jpg');
  });
});

 
