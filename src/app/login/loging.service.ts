import { Injectable, OnInit } from '@angular/core';
import * as usersArray from '../Users.json';
import { Router } from '@angular/router';
// import { log } from 'console';

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


  constructor(private router: Router) { }


  login(userToSearch: { email: string, password: string, name: string }) {

    for (let i = 0; i < this.myUsers.length; i++) {
      if (this.myUsers[i].email === userToSearch.email && this.myUsers[i].password === userToSearch.password) {
        console.log(this.myUsers[i]);

        return this.myUsers[i].name;

      }
      console.log(this.myUsers[i]);
    }
    return "false";


  }
  signUp(userToAdd: { email: string, password: string, name: string }) {
    console.log(userToAdd);

    this.myUsers.push(userToAdd);

  }
  autoLoading() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }
  }

  checkEmail(email: string) {
    console.log(this.myUsers);

    for (let i = 0; i < this.myUsers.length; i++) {
      if (this.myUsers[i].email === email) {
        console.log(this.myUsers[i]);
        return true;

      }
    }
    return false;

  }
}



