import { Component, OnInit } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true,
    
  }]
})
export class UserBookingComponent implements OnInit {
  user=1;
  UserBookings:any;
  currentpckg:any;
  check:boolean;

  constructor(private http:HttpClient, private router: Router) { }

  cancelBooking(pckg){
    this.currentpckg=pckg;
    console.log(this.currentpckg.startDate);
    this.check=(confirm("Are you sure you want to cancel the package?"));
    if(this.check===true){
    this.http.get('http://localhost:8090/Booking/cancel/' + this.currentpckg.bookId )
    .subscribe(()=>{ });
    
    }
  }

  ngOnInit() {
    let obs= this.http.get('http://localhost:8090/Customers/getBooking');
    obs.subscribe((response) => {
      this.UserBookings = response;
      console.log(this.UserBookings);
      
    })
  }

}
