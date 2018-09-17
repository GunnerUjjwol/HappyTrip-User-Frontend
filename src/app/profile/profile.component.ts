// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   currentUser={};
//   email='ujjwol.dandekhya@verscend.com';
 

//   constructor(private http:HttpClient) { }

//   ngOnInit() {
//     let obs= this.http.get('http://localhost:8090/Customers/user/'+ this.email);
//     obs.subscribe((response) => {
//       this.currentUser = response;
//       console.log(this.currentUser);
      
//     })
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenServiceService } from '../token-service.service';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class ProfileComponent implements OnInit {
  currentUser={};
  loginToken:String;
 

  constructor(private http:HttpClient,private router:Router,private tokenService:TokenServiceService) { }
  Update(form){
    let obs = this.http.put("http://localhost:8090/Customers/update",form.value).subscribe(()=>{
      this.router.navigate(['/dashboard/profile']);
    }) 
    console.log(form.value);
  }
  ngOnInit() {
    console.log("On init");
    
  

    let obs= this.http.get('http://localhost:8090/Customers/user/');
    obs.subscribe((response) => {
      this.currentUser = response;
      console.log(this.currentUser);
      
    });
  
  }
}
