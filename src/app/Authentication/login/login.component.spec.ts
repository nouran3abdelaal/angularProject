import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";
import { LogingService } from '../../services/loging.service';

const translateServiceMock = {
    use: (key: string) => of(key),
    get: (key: string) => of(key),
};

const logingServiceMock = jasmine.createSpyObj('LogingService', {
    loginlocal: "testUser",  // Mocked synchronous return value
    login: of({ token: 'testToken', name: 'testUser' })  // Mocked Observable for async
});


describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                RouterTestingModule,
                FormsModule,
                TranslateModule.forRoot()  // Ensures TranslateModule is configured
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: TranslateService, useValue: translateServiceMock },
                { provide: LogingService, useValue: logingServiceMock },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;

        // Trigger Angular's change detection to initialize the form
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate on successful login', () => {
        // Set form values directly to simulate user input
        component.userData.email = "n@gmail.com";
        component.userData.password = "123";

        // Execute the submit function, which calls `loginlocal`
        component.onSubmit();

        expect(logingServiceMock.loginlocal).toHaveBeenCalled();
        expect(component.userData.name).toBe("testUser");
        expect(component.error).toBeFalse();
    });
});
