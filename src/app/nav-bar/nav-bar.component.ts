import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../token-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class NavBarComponent implements OnInit {
  loginToken:string;
  constructor(private tokenService:TokenServiceService) { }

  ngOnInit() {
    this.loginToken = sessionStorage.getItem('token');
    this.tokenService.tokenEmitter.subscribe(token => {
      this.loginToken = token;
    });
  }

}
