import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: any;
  mycart: any;

  setMycart(data) {
    this.mycart = data;
  }
  getMycart() {
    return this.mycart;
  }

  setMessage(data) {
    this.message = data;
  }
  getMessage() {
    return this.message
  }
}
