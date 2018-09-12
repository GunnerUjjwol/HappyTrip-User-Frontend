import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser={};
  email='ujjwol.dandekhya@verscend.com';
 

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let obs= this.http.get('http://localhost:8090/Customers/user/'+ this.email);
    obs.subscribe((response) => {
      this.currentUser = response;
      console.log(this.currentUser);
      
    })
  }

}
