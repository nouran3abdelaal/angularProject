import { Injectable } from '@angular/core';

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


  constructor() { }


  login(userToSearch: { email: string, password: string, name: string }) {

    for (let i = 0; i < this.myUsers.length; i++) {
      if (this.myUsers[i].email === userToSearch.email && this.myUsers[i].password === userToSearch.password) {

        return this.myUsers[i].name;

      }
    }
    return "false";


  }
  signUp(userToAdd: { email: string, password: string, name: string }) {

    this.myUsers.push(userToAdd);

  }
 

  checkEmail(email: string) {

    for (let i = 0; i < this.myUsers.length; i++) {
      if (this.myUsers[i].email === email) {
        return true;

      }
    }
    return false;

  }
}





