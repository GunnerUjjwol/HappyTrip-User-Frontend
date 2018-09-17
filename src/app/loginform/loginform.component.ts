import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../app-http-interceptor';
import { Router } from '@angular/router';
import { TokenServiceService } from '../token-service.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  
})
export class LoginformComponent implements OnInit {
  response: any;
  email:string  = null;
  password:string  = null;
  
  loginToken:string = null;
  login(f){
    this.loginToken=btoa(`${this.email}:${this.password}`);
    sessionStorage.setItem('token',this.loginToken);

    console.log(sessionStorage.getItem('token'));

    this.tokenService.tokenEmitter.next(this.loginToken);
    console.log(atob(this.loginToken));
    this.http.get("http://localhost:8090/Customers/user/check").subscribe(
      ()=>{
        
        console.log(this.loginToken);
        
        this.router.navigate(['/dashboard']);
      },
      ()=>{
        alert("Username or password invalid!!!");
        this.tokenService.tokenEmitter.next(null);
        sessionStorage.removeItem('token');
      },
      ()=>{

      });
   

  }
  constructor(private router:Router,private tokenService:TokenServiceService,private http: HttpClient) { }

  ngOnInit() {
  }

}
