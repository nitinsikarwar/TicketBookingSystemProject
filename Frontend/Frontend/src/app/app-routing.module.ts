import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
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
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { FilterBusComponent } from './filter-bus/filter-bus.component';
import { AboutUsAdminComponent } from './about-us-admin/about-us-admin.component';
import { NavComponent } from './nav/nav.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { InsertticketComponent } from './insertticket/insertticket.component';
import { UpdateticketComponent } from './updateticket/updateticket.component';
import { DeleteticketComponent } from './deleteticket/deleteticket.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { AdminTicketComponent } from './admin-ticket/admin-ticket.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"AdminLogin", component:AdminLoginComponent},
  {path:"UserLogin", component:UserLoginComponent},
  {path:"UserRegistration", component:UserRegistrationComponent},
  {path:"UserHomepage", component:UserHomepageComponent},
  {path:"ShowBuses", component:ShowBusesComponent},
  {path:"AdminHomePage", component:AdminHomePageComponent},
  {path:"AdminBuses", component:AdminBusesComponent},
  {path:"AboutUs", component:AboutUsComponent},{path:"AdminRoute", component:AdminRouteComponent},
  {path:"UserRoute", component:UserRouteComponent},
  {path:"AdminBuses/BusRegistration", component:BusRegistrationComponent}, 
  {path:"AdminRoute/RouteRegistration", component:RouteRegistrationComponent},
  {path:"UserProfile", component:UserProfileComponent},
  {path:"AdminRoute/RouteUpdation", component:UpdateRouteComponent},
  {path:"AdminProfile", component:AdminProfileComponent},
  {path:"AdminBuses/BusUpdation", component:UpdateBusComponent},
  {path:"filter", component:FilterBusComponent},
  {path:"about", component:AboutUsAdminComponent},
  {path:"reg_log", component:UserLoginComponent},
  {path:"updateProfile", component:UpdateUserProfileComponent},
  {path:"insertTicket", component:InsertticketComponent},
  {path:"updateTicket", component:UpdateticketComponent},
  {path:"deleteTicket", component:DeleteticketComponent},
  {path:"showTicket", component:ShowticketComponent},
  {path:"adminTicket", component:AdminTicketComponent},
  {path:"error", component:ErrorComponent},
  {path:"", component:LandingComponent},
  {path:"abt", component:AboutComponent}


  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
