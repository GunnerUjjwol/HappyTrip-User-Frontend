import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  has_Submitted='';

  sendMessage(form){
    console.log(form.value);
    this.has_Submitted='submitted';
    let obs = this.http.post("http://localhost:8090/UserQuery/add",form.value);
    obs.subscribe(()=>{

    })
  }
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
