import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: string;
  password: string;
  confirmpassword: string;
  email: string;
  mobile: string;
  address: string;
  registerobj: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register() {
    alert(this.name + " " + this.password + " " + this.confirmpassword + " " + this.email + " " + this.mobile + " " + this.address)
    this.registerobj = {
      "name": this.name,
      "password": this.password,
      "email": this.email,
      "mobile": this.mobile,
      "address": this.address
    }
    let url = "http://httpbin.org/post";
    
    this.http.post(url, this.registerobj).toPromise().then(data => {
      console.log("response from server " + JSON.stringify(data));      
      console.log(data['name']);
    })
    console.log(this.registerobj);

  }

}
