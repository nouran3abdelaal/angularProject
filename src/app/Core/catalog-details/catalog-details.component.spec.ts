import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core'; 
import { CatalogDetailsComponent } from './catalog-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, DebugElement } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Test } from 'src/app/services/test.servcie';
import { Test2 } from 'src/app/services/test2.servcie';
import { By } from '@angular/platform-browser';

@Injectable()
export class MockCanActivateGuard implements CanActivate {
  canActivate(): boolean {
    return true; 
  }
}
fdescribe('CatalogDetailsComponent', () => {
  let component: CatalogDetailsComponent;
  let fixture: ComponentFixture<CatalogDetailsComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogDetailsComponent],
      imports: [RouterTestingModule], 
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        Test,Test2,
      ],
    });
    fixture = TestBed.createComponent(CatalogDetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
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
  
    const cardTitle = debugElement.query(By.css('.card-title')).nativeElement.textContent;
    expect(cardTitle).toContain('Test Movie');
  
    const cardOverview = debugElement.query(By.css('.card-text:nth-child(2)')).nativeElement.textContent;
    expect(cardOverview).toContain('This is a test movie');
  
    const releaseDate = debugElement.query(By.css('.card-text:nth-child(4)')).nativeElement.textContent;
    expect(releaseDate).toContain('2023-09-12');
  
    const language = debugElement.query(By.css('.card-text:nth-child(6)')).nativeElement.textContent.toLowerCase();
    expect(language).toContain('english');
  
    const voteAverage = debugElement.query(By.css('.card-text:nth-child(8)')).nativeElement.textContent;
    expect(voteAverage).toContain('7.5');
  
    const voteCount = debugElement.query(By.css('.card-text:nth-child(10)')).nativeElement.textContent;
    expect(voteCount).toContain('100');
  
    const poster = debugElement.query(By.css('img')).nativeElement.getAttribute('src');
    expect(poster).toContain('/test-poster.jpg');
  });
  
});

 
