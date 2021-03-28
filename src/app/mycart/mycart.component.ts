import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})

export class MycartComponent implements OnInit {

  mycart: any;
  constructor(private shared: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);
    })

    this.mycart = this.shared.getMycart();
    console.log(this.mycart);
  }

  deleteItem(id) {
    alert(id);
    //this.mycart.filter((item) => item.id !== id);
    delete this.mycart[id];
    console.log("item deleted successfully ");

  }


}
