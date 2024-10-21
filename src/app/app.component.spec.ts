import { BackendSource } from './services/backendSource.servcie';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AlertComponent } from './shared/alert/alert.component';
import { TranslateService } from '@ngx-translate/core';  // Correct import here
import { of } from 'rxjs';

const translateServiceStub = {
  instant: (key: string) => key,  // Mock instant method
  get: (key: string) => of(key)   // Mock get method to return an observable
};

fdescribe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let backendSource: BackendSource

  beforeEach(async () => {
    console.log("async berfor")
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AppComponent
        // ,AlertComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        // {          provide: TranslateService, useValue: translateServiceStub,
        // }
      ]
    }).compileComponents();
    console.log("async after")

  });
  beforeEach(() => {
    console.log("sync berfor")

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    debugElement = fixture.debugElement;
    backendSource = TestBed.inject(BackendSource)
    fixture.detectChanges();
    console.log("sync after")

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-first-app'`, () => {
    expect(app.title).toEqual('my-first-app');
  });
  it(`backendSource should have value equals to local by default`, () => {
    expect(backendSource.backendSource).toEqual('local');
  });
  it(`backendSource should have value equals to Spring after clicking first button`, () => {
    const button = debugElement.query(By.css('button.btn'));
    button.nativeElement.click();
    expect(backendSource.backendSource).toEqual('Spring');
  });
  it(`backendSource should have value equals to Spring after clicking second button`, () => {
    const button = debugElement.query(By.css('button.btn:nth-of-type(2)'));
    button.nativeElement.click();
    expect(backendSource.backendSource).toEqual('local');
  });
});
