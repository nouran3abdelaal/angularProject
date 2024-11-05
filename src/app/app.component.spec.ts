import { BackendSourceService } from './services/backendSource.servcie';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AlertComponent } from './shared/alert/alert.component';
// import { TranslateService } from '@ngx-translate/core';  // Correct import here
import { of } from 'rxjs';
import { ShortenTextPipe } from './shared/pipes/shorten-text.pipe';
import { TranslateService } from '@ngx-translate/core';

const translateServiceStub = {
  get: (key: string) => of(key) 
};

fdescribe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let backendSource: BackendSourceService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AppComponent
        // ,AlertComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        // ShortenTextPipe,
        // TranslateService
        // {          provide: TranslateService, useValue: translateServiceStub,
        // }
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    debugElement = fixture.debugElement;
    backendSource = TestBed.inject(BackendSourceService)
    fixture.detectChanges();

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

  it(`should show the difference between toBE and toEqual'`, () => {
    const obj1 = []
    expect(10).toBe(10);           // Passes: both are exactly the same number
    expect(obj1).toBe(obj1);       // Passes: obj1 is the same reference as obj1
   // expect([1, 2, 3]).toBe([1, 2, 3]);  // Fails: different array instances, even though contents are identical
    expect({ name: 'Alice' }).toEqual({ name: 'Alice' });   // Passes: objects have the same structure and content
    expect([1, 2, 3]).toEqual([1, 2, 3]);                   // Passes: arrays have the same values in the same order
    
  });
});
