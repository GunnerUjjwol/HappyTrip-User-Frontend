import { Component, OnInit } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class PaymentComponent implements OnInit {
  currentUser={};
  total_price : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {  
    this.http.get("http://localhost:8090/Customers/user").subscribe((response)=>{
      console.log(response);
      this.currentUser = response;
    })
    this.http.get("http://localhost:8090/Customers/getPrice").subscribe((response)=>{
      this.total_price = response;
    })
  }

}