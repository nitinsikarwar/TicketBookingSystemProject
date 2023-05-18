
import { Component, Inject, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';


import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-admin-home-page',
templateUrl: './admin-home-page.component.html',
styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

    noOfTicketsBooked:any
    noOfRoutes:any
    noOfTravelers:any
    noOfBuses:any
    nadmin:any
constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser: AdminServiceService, private route: Router) {
    this.toastr.success("Login successful", "Success");
    // console.log(this.admser.getBusList())
    // console.log(this.admser.getRouteList())
    // console.log(this.admser.getTicketList())
    // console.log(this.admser.getUsersList())
    this.calculate()
}
    ngOnInit(): void {
        this.calculate()
    }
    calculate(){
        console.log(this.admser.getBusList())
    console.log(this.admser.getRouteList())
    console.log(this.admser.getTicketList())
    console.log(this.admser.getUsersList())
    this.noOfBuses = this.admser.getBusList().length
    this.noOfRoutes = this.admser.getRouteList().length
   // this.noOfTravelers = this.admser.getUsersList().length
   this.nadmin =  this.admser.getUser().length
    this.noOfTicketsBooked = this.admser.getTicketList().length

    }
    


}

