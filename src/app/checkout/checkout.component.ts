import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private shared: SharedService) { }

  message: any;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);
    })
    this.message = this.shared.getMessage();
    console.log(this.message);
  }

}
