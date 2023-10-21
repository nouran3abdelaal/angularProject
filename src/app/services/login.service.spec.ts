import { TestBed, inject } from "@angular/core/testing";
import { LogingService } from "./loging.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoginComponent } from "../Authentication/login/login.component";

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [LoginComponent],
    imports: [HttpClientTestingModule], 
  
  });

});

it('should call the API and return the response',  inject([LogingService], (logingService: LogingService)=> {
  const email = 'test@example.com';

  logingService.checkEmail(email).subscribe((response) => {
    expect(response).toBeFalse

    
   })
  }));
