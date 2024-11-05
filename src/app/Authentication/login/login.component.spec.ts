import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";
import { LogingService } from '../../services/loging.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BackendSource } from "src/app/services/backendSource.servcie";

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
    let backendSource: BackendSource;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                FormsModule,// ReactiveFormsModule
                TranslateModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: TranslateService, useValue: translateServiceMock },
                { provide: LogingService, useValue: logingServiceMock },
                BackendSource  // Ensure BackendSource is provided if used directly
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        backendSource = TestBed.inject(BackendSource);
        backendSource.backendSource = "local";  // Set backend source to local

        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate on successful login when backend source is local', () => {
        // Mocking form input values
        component.userData.email = "user1@example.com";
        component.userData.password = "pass1";

        // Triggering form submit
        component.onSubmit();

        // Checking expectations
        expect(logingServiceMock.loginlocal).toHaveBeenCalled();
        expect(component.userData.name).toBe("testUser");  // Mock return value from loginlocal
        expect(component.error).toBeFalse();
    });

    it('should mark email control as invalid if empty', () => {
        const emailControl = component.siginForm.controls['email'];
        emailControl.setValue('');  // Empty email
        expect(emailControl.valid).toBeFalse();
        expect(emailControl.errors?.['required']).toBeTruthy();  // Check for required error
    });

    it('should mark password control as invalid if empty', () => {
        const passwordControl = component.siginForm.controls['password'];
        passwordControl.setValue('');  // Empty password
        expect(passwordControl.valid).toBeFalse();
        expect(passwordControl.errors?.['required']).toBeTruthy();  // Check for required error
    });
});
