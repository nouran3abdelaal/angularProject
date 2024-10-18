import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FetchMoivesService } from 'src/app/services/fetch-moives.service';
import { BackendSource } from 'src/app/services/backendSource.servcie';

const translateServiceStub = {
  instant: (key: string) => key,
};

@Injectable()
export class MockCanActivateGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }
}

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let service: FetchMoivesService;
  let backendSource: BackendSource

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogComponent, NavBarComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
          provide: TranslateService, useValue: translateServiceStub,
        },
        {
          provide: MockCanActivateGuard,
          useClass: MockCanActivateGuard,
        }  
       ],
    });

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(FetchMoivesService);
    backendSource = TestBed.inject(BackendSource)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the fetchPosts method of the fetchMoives service', () => {
    spyOn(service, "fetchPosts");
    component.getingAllMoives()
    expect(service.fetchPosts).toHaveBeenCalled();
  });
});
