import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {
  user=1;
  UserBookings:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let obs= this.http.get('http://localhost:8090/Customers/getBooking/'+ this.user);
    obs.subscribe((response) => {
      this.UserBookings = response;
      console.log(this.UserBookings);
      
    })
  }

}
