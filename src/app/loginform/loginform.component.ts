import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  response: any;
  myfunc(f) {
    // let obs = this.http.post("http://localhost:8080/Customers/login",f.value);
    // obs.subscribe((response) =>{
    //   this.response =response;
    // });
    console.log(f.value)

  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
