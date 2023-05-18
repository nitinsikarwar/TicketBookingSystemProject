import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ShowBusesComponent } from './show-buses/show-buses.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminBusesComponent } from './admin-buses/admin-buses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserRouteComponent } from './user-route/user-route.component';
import { AdminRouteComponent } from './admin-route/admin-route.component';
import { BusRegistrationComponent } from './bus-registration/bus-registration.component';
import { RouteRegistrationComponent } from './route-registration/route-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { FilterBusComponent } from './filter-bus/filter-bus.component';
import { AboutUsAdminComponent } from './about-us-admin/about-us-admin.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { UpdateticketComponent } from './updateticket/updateticket.component';
import { DeleteticketComponent } from './deleteticket/deleteticket.component';
import { InsertticketComponent } from './insertticket/insertticket.component';
import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { ToastrModule } from 'ngx-toastr';
import { TOASTR_TOKEN, Toastr } from './toastr.service';
declare const toastr: Toastr;
@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserHomepageComponent,
    ShowBusesComponent,
    AdminHomePageComponent,
    AdminBusesComponent,
    AboutUsComponent,
    UserRouteComponent,
    AdminRouteComponent,
    BusRegistrationComponent,
    RouteRegistrationComponent,
    UserProfileComponent,
    AdminProfileComponent,
    UpdateBusComponent,
    UpdateRouteComponent,
    FilterBusComponent,
    AboutUsAdminComponent,
    NavComponent,
    AboutComponent,
    UpdateUserProfileComponent,
    ShowticketComponent,
    UpdateticketComponent,
    DeleteticketComponent,
    InsertticketComponent,
    AdminTicketComponent,
    ErrorComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,HttpClientModule,
    AppRoutingModule
  ], exports: [RouterModule, AppRoutingModule],
  providers: [{
    provide: TOASTR_TOKEN,
    useValue: toastr
  }],
  bootstrap: [AppComponent]
})


export class AppModule { }
