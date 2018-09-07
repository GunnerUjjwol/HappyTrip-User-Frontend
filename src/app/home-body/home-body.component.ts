import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {
  list: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get("http://localhost:8090/Package/all");
    obs.subscribe((response) => {
      this.list = response;
      console.log(response);
    })

  }

}
