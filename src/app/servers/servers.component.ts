import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  userData = {
    email: ' ',
    password: ' ',
    name: ''
  };
  ngOnInit(): void {
      this.userData = JSON.parse(localStorage.getItem("userData"));
      console.log(JSON.parse(localStorage.getItem("userData")));

  }

}
