import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FetchMoivesService } from 'src/app/services/fetch-moives.service';
import { BackendSource } from 'src/app/services/backendSource.servcie';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Test } from 'src/app/services/test.servcie';
import { By } from '@angular/platform-browser';
import { ShortenTextPipe } from 'src/app/shared/pipes/shorten-text.pipe';



fdescribe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let service: jasmine.SpyObj<FetchMoivesService>;
  let backendSource: BackendSource
  let debugElement: DebugElement;

  beforeEach(async () => {
    service = jasmine.createSpyObj('FetchMoivesService', ['fetchPosts']);

    await TestBed.configureTestingModule({
      declarations: [CatalogComponent,ShortenTextPipe],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        Test,
        {provide:FetchMoivesService, useValue:service}
      ],
    }).compileComponents()
      fixture = TestBed.createComponent(CatalogComponent);
      component = fixture.componentInstance;
      backendSource = TestBed.inject(BackendSource)
      debugElement = fixture.debugElement;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the fetchPosts method of the fetchMoives service', () => {
    component.getAllMoives()
    expect(service.fetchPosts).toHaveBeenCalled();
  });
  it('moives should be empty', () => {
    service.fetchPosts.and.returnValue(of([]));
    component.getAllMoives()
    expect(component.moives).toEqual([]);
  });
  it('should render the correct number of movies', () => {
    const mockMoives = {
      results: [
        { original_title: 'Movie 1', poster_path: '/path1.jpg', overview: 'Overview 1' },
        { original_title: 'Movie 2', poster_path: '/path2.jpg', overview: 'Overview 2' }
      ]
    };
    service.fetchPosts.and.returnValue(of(mockMoives));

    component.getAllMoives(); 
    fixture.detectChanges();

    const movieCards = debugElement.queryAll(By.css('.card'));
    expect(movieCards.length).toBe(mockMoives.results.length);
  });
  
});
