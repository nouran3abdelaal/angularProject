import { ComponentFixture, inject } from "@angular/core/testing";
import { Router } from '@angular/router';
import { ShortenTextPipe } from "./shorten-text.pipe";



it('Shorten pipe should return correct answer',  () => {
    const testEmail = "user1@example.com_user1@example.com_user1@example.com";
    let shortenPipe = new ShortenTextPipe();
    const result = shortenPipe.transform(testEmail);

    expect(result).toEqual("user1@example.com_user1@example.com_user1@example. ..."); 
  });
