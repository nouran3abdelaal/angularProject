import { Injectable, OnInit } from '@angular/core';
import * as usersArray from '../Users.json';
import { Router } from '@angular/router';
// import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class LogingService  {
  // users :{ email: string, password: string,name:string }[] = JSON.parse(JSON.stringify(usersArray)); //JSON.parse(JSON.stringify(usersArray))
  myUsers:{ email: string, password: string,name:string }[]=
  [
    {
      "email": "user1@example.com",
      "password": "pass1",
      "name":"Nouran"
    },
    {
      "email": "user2@example.com",
      "password": "pass2",
      "name":"Nouran2"

    },
    {
        "email": "user3@example.com",
        "password": "pass3",
        "name":"Nouran3"

    }
    
    
  ];
  

  constructor(private router: Router) { }
 

login(userToSearch: { email: string, password: string ,name:string}) {
  // console.log(this.users[0]);
  // for (let i = 0; i < this.users.length; i++) {
  //   if(this.users[i].email === userToSearch.email && this.users[i].password === userToSearch.password){
  //     console.log(this.users[i]);

  //     return this.users[i].name;

  //   }
  //   console.log(this.users[i]);
  // }
  for (let i = 0; i < this.myUsers.length; i++) {
    if(this.myUsers[i].email === userToSearch.email && this.myUsers[i].password === userToSearch.password){
      console.log(this.myUsers[i]);

      return this.myUsers[i].name;

    }
    console.log(this.myUsers[i]);
  }
  return "false";

  // const foundUser = this.users.find((user) => 
  //   user.email === userToSearch.email && user.password === userToSearch.password
  // );
  
  // if (foundUser) {
  //   console.log('User found:', foundUser);
    // return true;
  // } else {
  //   console.log('User not found');
  //   return false;
  // }
}
signUp(userToAdd: { email: string, password: string ,name:string}) {
  console.log(userToAdd);
  
  this.myUsers.push(userToAdd);
 
}
autoLoading(){
  const userData = JSON.parse(localStorage.getItem("userData"));
  if(!userData){
    return;
  }
}

checkEmail(email:string){
  console.log(this.myUsers);
  
  for (let i = 0; i < this.myUsers.length; i++) {
    if(this.myUsers[i].email === email ){
      // console.log(this.myUsers[i]);
      console.log(this.myUsers[i]);
      return true;

    }
    // console.log(this.myUsers[i]);
  }
  return false;

}
}



