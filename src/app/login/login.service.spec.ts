import { ComponentFixture, inject } from "@angular/core/testing";
import { LogingService } from "./loging.service";
import { Router } from '@angular/router';



it('should return false', inject([LogingService], (logingService: LogingService) => {
    const testEmail = "user1@example.com";
    
    const result = logingService.checkEmail(testEmail);

    expect(result).toEqual(true); 
  }));
