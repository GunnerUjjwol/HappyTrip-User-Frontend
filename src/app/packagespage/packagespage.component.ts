import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-packagespage',
  templateUrl: './packagespage.component.html',
  styleUrls: ['./packagespage.component.css']
})
export class PackagespageComponent implements OnInit {
  list:any;
  user="Dummy Customer";
 
 
  constructor(private http:HttpClient) { }

  onBooked(l){
   
    //const body={list:l,user:this.myVar};
    //const body={PackageTrip:l,user:this.myVar};
    const body={PackageTrip:l,user:this.user};
    console.log(body);
    let obs = this.http.post("http://localhost:8090/Booking/add",body); 
    obs.subscribe(()=>{});
  }

  ngOnInit() {
    let obs = this.http.get("http://localhost:8090/Package/all");
    obs.subscribe((response)=>{
      this.list = response;
      console.log(this.list);
    })
  }

}