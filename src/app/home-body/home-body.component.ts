import { Component, OnInit } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenServiceService } from '../token-service.service';
import { Router } from '@angular/router';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class HomeBodyComponent implements OnInit {
  list: any;
  loginToken:string=null;
  email:String;
  password:String;

  constructor(private http: HttpClient,private router:Router, private tokenService: TokenServiceService) { }
  // login(f){
  //   this.loginToken=btoa(`${this.email}:${this.password}`);
  //   sessionStorage.setItem('token',this.loginToken);

  //   console.log(sessionStorage.getItem('token'));

  //   this.tokenService.tokenEmitter.next(this.loginToken);
  //   console.log(atob(this.loginToken));
  //   this.http.get("http://localhost:8090/Customers/check").subscribe(
  //     ()=>{
        
  //       console.log(this.loginToken);
        
  //       this.router.navigate(['/dashboard']);
  //     },
  //     ()=>{
  //       alert("Username or password invalid!!!");
  //       this.tokenService.tokenEmitter.next(null);
  //       sessionStorage.removeItem('token');
  //     },
  //     ()=>{

  //     });
   

  // }
  ngOnInit() {
    let obs = this.http.get("http://localhost:8090/Package/all" , { headers: { [AppHttpInterceptor.SKIP_TOKEN]: '' } });
    obs.subscribe((response) => {
      this.list = response;
      console.log(response);
    })

  }

  

}
