import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationResponse } from '../Models/AuthenticationResponse';
import { user } from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class LogingService {
  myUsers: { email: string, password: string, name: string }[] =
    [
      {
        "email": "user1@example.com",
        "password": "pass1",
        "name": "Nouran"
      },
      {
        "email": "user2@example.com",
        "password": "pass2",
        "name": "Nouran2"

      },
      {
        "email": "user3@example.com",
        "password": "pass3",
        "name": "Nouran3"

      }


    ];


    constructor(private http: HttpClient,private cookieService: CookieService) { }


    login(userToSearch: { email: string, password: string }) {
      return this.http.post<AuthenticationResponse>(`http://localhost:8080/api/auth/authenticate`, userToSearch);
     
    }
  signUp(userToAdd: { email: string, password: string, name: string }) {
    const requestBody = {
      email: userToAdd.email,
      password: userToAdd.password,
      name: userToAdd.name
    };
  
    this.http.post<AuthenticationResponse>('http://localhost:8080/api/auth/register', requestBody)
      .subscribe(
        (response) => {
          console.log('User registered:', response);
          const jwtToken = response.token;
          this.cookieService.set('jwtToken', jwtToken);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
  }
 

  checkEmail(email: string) {
    console.log(`http://localhost:8080/api/auth/user/${email}`);
    
    return ( this.http.get<user>(`http://localhost:8080/api/auth/user/${email}`))
    

  }
}





