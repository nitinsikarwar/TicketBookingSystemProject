
import { AdminServiceService } from '../admin-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';

@Component({
  selector: 'app-route-registration',
  templateUrl: './route-registration.component.html',
  styleUrls: ['./route-registration.component.css']
})
export class RouteRegistrationComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser:AdminServiceService,private route:Router){

  }


  routeRegister(formdata:any){
    console.log(formdata)
    return this.admser.insertRoute(formdata).subscribe((data)=>{
      this.toastr.success("Route Registration successful", "Success");
    this.route.navigate(["/AdminRoute"]);
  }
    

  )}
  



}
