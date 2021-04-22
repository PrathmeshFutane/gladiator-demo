import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private shared: SharedService) { }

  data: any;
  message: any;
  mycartobj = [];

  ngOnInit(): void {
    let url = "https://fakestoreapi.com/products";
    this.http.get(url).subscribe(response => {
      // alert(JSON.stringify(response));
      this.data = response;
      console.log(response);
      // alert(response[0]);
      //console.log(response[0]);
      //alert(response[0]['userId']);

    })
  }

  mycart(i) {
    //console.log(i);
    this.mycartobj.push(i);
    //console.log(this.mycartobj);
    this.shared.setMycart(this.mycartobj);
    if (sessionStorage.getItem("mycart") != null) {
      //console.log(sessionStorage.getItem("mycart"));
      let items = JSON.parse(sessionStorage.getItem("mycart"));
      //console.log(items[0]["id"]);
      for (let i of items) {
        console.log(i['id'] + " new");
      }
    }
    sessionStorage.setItem("mycart", JSON.stringify(this.mycartobj));
  }

  buy(i: any) {
    console.log("done");
    console.log(i);
    this.router.navigate(["checkout"]);
    console.log("done2");
    this.message = i;
    this.shared.setMessage(this.message);
  }





}
