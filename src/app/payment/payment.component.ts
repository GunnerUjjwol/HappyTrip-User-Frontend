import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  currentUser={};
  total_price : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {  
    this.http.get("http://localhost:8090/Customers/user/ujjwol.dandekhya@verscend.com").subscribe((response)=>{
      console.log(response);
      this.currentUser = response;
    })
    this.http.get("http://localhost:8090/Customers/getPrice/ujjwol.dandekhya@verscend.com").subscribe((response)=>{
      this.total_price = response;
    })
  }

}