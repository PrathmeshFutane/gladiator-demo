import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  loginobj: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (sessionStorage.getItem('username') == this.username && sessionStorage.getItem('password') == this.username) {
      //now here we wan't to redirect the user to home page or product page   
      this.router.navigate(["product"]);
    }
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    //alert(this.username + " " + this.password);
    console.log(this.username + " " + this.password);
    this.router.navigate(["product"]);
    //code to check that values is present in database or not
    //how to send data from angular to backend using api java

    this.loginobj = {
      "username": this.username,
      "password": this.password
    }

    console.log(this.loginobj);


  }



}
