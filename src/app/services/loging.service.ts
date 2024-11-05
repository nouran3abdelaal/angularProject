import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationResponse } from '../Models/AuthenticationResponse';
import { user } from '../Models/user';
import { BackendSource } from './backendSource.servcie';
import { Observable } from 'rxjs';


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


  constructor(private http: HttpClient, private cookieService: CookieService, private backendSource: BackendSource) { }


  login(userToSearch: { email: string, password: string }) {
    //console.log("here");
    
    return this.http.post<AuthenticationResponse>(`http://localhost:8080/api/auth/authenticate`, userToSearch);

  }
  signUp(userToAdd: { email: string, password: string, name: string }) {
    const requestBody = {
      email: userToAdd.email,
      password: userToAdd.password,
      name: userToAdd.name
    };
    if (this.backendSource.backendSource === 'local') {
      return this.signUplocal(userToAdd)
    }

    this.http.post<AuthenticationResponse>('http://localhost:8080/api/auth/register', requestBody)
      .subscribe(
        (response) => {
          //console.log('User registered:', response);
          const jwtToken = response.token;
          this.cookieService.set('jwtToken', jwtToken);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
  }


  checkEmail(email: string) {
    return (this.http.get<user>(`http://localhost:8080/api/auth/user/${email}`))
  }

  loginlocal(userToSearch: { email: string, password: string }) {
    console.log("here");

    for (let i = 0; i < this.myUsers.length; i++) {
      if (this.myUsers[i].email === userToSearch.email && this.myUsers[i].password === userToSearch.password) {

        return this.myUsers[i].name;

      }
    }
    return "false";


  }
  signUplocal(userToAdd: { email: string, password: string, name: string }) {

    this.myUsers.push(userToAdd);

  }


  checkEmaillocal(email: string) {

    for (let i = 0; i < this.myUsers.length; i++) {
      if (this.myUsers[i].email === email) {
        return true;

      }
    }
    return false;

  }
}







