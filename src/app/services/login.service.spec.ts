import { ComponentFixture, inject } from "@angular/core/testing";
import { LogingService } from "./loging.service";



it('should return false', inject([LogingService], (logingService: LogingService) => {
    const testEmail = "user1@example.com";
    
    const result = logingService.checkEmail(testEmail);

    expect(result).toEqual(true); 
  }));