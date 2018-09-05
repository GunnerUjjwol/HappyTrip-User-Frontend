import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { LoginformComponent } from './loginform/loginform.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PackagespageComponent } from './packagespage/packagespage.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserdashboardNavComponent } from './userdashboard-nav/userdashboard-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    HomeBodyComponent,
    LoginformComponent,
    AboutusPageComponent,
    ContactUsComponent,
    PackagespageComponent,
    RegistrationFormComponent,
    UserdashboardNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpClientModule,
    RouterModule.forRoot([
      {path: 'about-us', component: AboutusPageComponent  },
      {path: 'home', component: HomeBodyComponent },
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'packages', component: PackagespageComponent},
      {path: 'dashboard', component: UserdashboardNavComponent},
      {path: ' ', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
