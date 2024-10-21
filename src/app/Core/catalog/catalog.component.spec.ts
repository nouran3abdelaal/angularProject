import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FetchMoivesService } from 'src/app/services/fetch-moives.service';
import { BackendSource } from 'src/app/services/backendSource.servcie';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Test } from 'src/app/services/test.servcie';



fdescribe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let service: jasmine.SpyObj<FetchMoivesService>;
  let backendSource: BackendSource

  beforeEach(async () => {
    service = jasmine.createSpyObj('FetchMoivesService', ['fetchPosts']);

    await TestBed.configureTestingModule({
      declarations: [CatalogComponent],
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
  
});
