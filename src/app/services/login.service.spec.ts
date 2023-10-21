import { inject } from "@angular/core/testing";
import { LogingService } from "./loging.service";



// it('Login service unique email check should return false', inject([LogingService], (logingService: LogingService) => {
//     const testEmail = "user1@example.com";
    
//     const result = logingService.checkEmail(testEmail);

//     expect(result).toEqual(true); 
//   }));
it('should call the API and return the response',  inject([LogingService], (logingService: LogingService)=> {
  const email = 'test@example.com';
  // const expectedResponse = false; // Adjust this to match the expected response structure

  logingService.checkEmail(email).subscribe((response) => {
    expect(response).toBeFalse

    
   })
  }));
