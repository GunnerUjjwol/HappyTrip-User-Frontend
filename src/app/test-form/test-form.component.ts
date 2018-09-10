import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  setBooking(f){
    console.log(f.value);
    this.http.post("http://localhost:8090/Customers/addBooking/1",f.value).subscribe(()=>{});
  }
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
