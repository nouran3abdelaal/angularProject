import { Injectable } from '@angular/core';
import * as usersArray from '../Users.json';
import { Router } from '@angular/router';
// import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class LogingService {
  users :{ email: string, password: string,name:string }[] = JSON.parse(JSON.stringify(usersArray)); //JSON.parse(JSON.stringify(usersArray))

  constructor(private router: Router) { }

login(userToSearch: { email: string, password: string ,name:string}) {
  // console.log(this.users[0]);
  for (let i = 0; i < this.users.length; i++) {
    if(this.users[i].email === userToSearch.email && this.users[i].password === userToSearch.password){
      console.log(this.users[i]);

      return this.users[i].name;

    }
    console.log(this.users[i]);
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
autoLoading(){
  const userData = JSON.parse(localStorage.getItem("userData"));
  if(!userData){
    return;
  }
      // this.router.navigate(['/Catalog']);

}
}



