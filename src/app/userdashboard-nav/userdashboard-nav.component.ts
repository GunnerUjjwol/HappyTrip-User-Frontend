import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../token-service.service';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../app-http-interceptor';

@Component({
  selector: 'app-userdashboard-nav',
  templateUrl: './userdashboard-nav.component.html',
  styleUrls: ['./userdashboard-nav.component.css'],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }]
})
export class UserdashboardNavComponent implements OnInit {

  constructor(private tokenService:TokenServiceService,private router:Router) { }

  ngOnInit() {
  }

  Logout(){
    sessionStorage.removeItem('token');
    this.tokenService.tokenEmitter.next(null);
    this.router.navigate(['/home']);

  }

}
