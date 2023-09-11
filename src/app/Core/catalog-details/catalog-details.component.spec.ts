import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from '..//nav-bar/nav-bar.component';
import { ActivatedRoute, Router } from '@angular/router';

import { CatalogDetailsComponent } from './catalog-details.component';

import { CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

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
      ],

    });
    fixture = TestBed.createComponent(CatalogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
