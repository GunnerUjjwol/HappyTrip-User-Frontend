import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createElementCssSelector } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packagespage',
  templateUrl: './packagespage.component.html',
  styleUrls: ['./packagespage.component.css']
})
export class PackagespageComponent implements OnInit {
  list: any;
  user = "Dummy Customer";

  has_Booked = '';
  check:boolean;
  startDate:any;
  //Date.now() returns number in milliseconds since Jan1, 1970
  //User can choose the trip starting date to be at least after two days of current date and not after 90 days
  mindate: number = Date.now() +  2*24*60*60*1000 ; 
  maxdate: number = Date.now() +  90*24*60*60*1000 ;


  constructor(private http: HttpClient,protected router:Router) { }

  onBooked(l, date) {
    console.log(date);
    this.startDate=date;
    const body = { PackageTrip: l, user: this.user, startDate: this.startDate };
    console.log(body);
    this.has_Booked = '';
    this.check=(confirm("Press Ok to Confirm Your Booking"));
    console.log(this.check);
    if(this.check===true){
      console.log("booked");
    let obs = this.http.post("http://localhost:8090/Booking/add", body);
    obs.subscribe(() => { });
    this.router.navigate(['/dashboard/bookings']);
    }
    else{
      console.log("cancelled");
    }
    
    
  }



  ngOnInit() {
    let obs = this.http.get("http://localhost:8090/Package/all");
    obs.subscribe((response) => {
      this.list = response;
      console.log(this.list);
    })
  }

}
