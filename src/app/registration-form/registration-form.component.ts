import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
result:any;

  register(f) {
    console.log(f.value);
    console.log(f.value.email);
    let obs = this.http.post("http://localhost:8090/Customers/add/"+f.value.email,f.value, { headers: { [AppHttpInterceptor.SKIP_TOKEN]: '' } });
    obs.subscribe((response) => {
      console.log(response);
      this.result=response;
      console.log(this.result.register);
      if(this.result.register==="yes"){
        this.router.navigate(['/login']);
        alert("Successfully Registered!!");
        
      }
      else if(this.result.register==="no"){
        alert("Registration failed! The email address seems to be taken!")
      }
      

      

      
     });
  }
  constructor(private http: HttpClient, protected router: Router) { }

  ngOnInit() {
  }

}
