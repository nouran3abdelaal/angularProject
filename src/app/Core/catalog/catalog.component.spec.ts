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
import { Router } from '@angular/router';



fdescribe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let service: jasmine.SpyObj<FetchMoivesService>;
  let backendSource: BackendSource
  let debugElement: DebugElement;
  let router:  jasmine.SpyObj<Router>;
  // let router:  Router;

  const mockMoives = {
    results: [
      { original_title: 'Movie 1', poster_path: '/path1.jpg', overview: 'Overview 1',id:1 },
      { original_title: 'Movie 2', poster_path: '/path2.jpg', overview: 'Overview 2', id:2 }
    ]
  };
  beforeEach(async () => {
    service = jasmine.createSpyObj('FetchMoivesService', ['fetchPosts']);
     router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [CatalogComponent,ShortenTextPipe],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        Test,
        {provide:FetchMoivesService, useValue:service},
        {provide:Router, useValue:router}

      ],
    }).compileComponents()
      fixture = TestBed.createComponent(CatalogComponent);
      component = fixture.componentInstance;
      backendSource = TestBed.inject(BackendSource)
      debugElement = fixture.debugElement;
      // router = TestBed.inject(Router);
      // spyOn(router, 'navigate'); 
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
    service.fetchPosts.and.returnValue(of(mockMoives));

    component.getAllMoives(); 
    fixture.detectChanges();

    const movieCards = debugElement.queryAll(By.css('.card'));
    expect(movieCards.length).toBe(mockMoives.results.length);
  });
  it('should navigate to the details page with the correct ID when "More Details" is clicked', () => {
    service.fetchPosts.and.returnValue(of(mockMoives));
    component.getAllMoives(); 
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const moreDetailsButton = debugElement.query(By.css('.btn.btn-primary')); 

    moreDetailsButton.triggerEventHandler('click', null); 
    expect(router.navigate).toHaveBeenCalledWith(['/catalogDetails', mockMoives.results[0].id]);
});
  
});
