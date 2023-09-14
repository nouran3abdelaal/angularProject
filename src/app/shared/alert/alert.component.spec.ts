import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { TranslateService } from '@ngx-translate/core';
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

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers:[
        TranslateService,
        {
          provide: TranslateService,
          useValue: translateServiceStub,
      },
      ]
    });
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
