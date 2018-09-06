import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  register(f){
    console.log(f.value);
    let obs = this.http.post("http://localhost:8090/Customers/add",f.value);
    obs.subscribe(()=>{});
  }
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
