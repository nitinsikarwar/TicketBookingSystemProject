
import { AdminServiceService } from '../admin-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';

@Component({
  selector: 'app-bus-registration',
  templateUrl: './bus-registration.component.html',
  styleUrls: ['./bus-registration.component.css']
})
export class BusRegistrationComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser:AdminServiceService, private route:Router){

  }


  registerBus(bus:any){
    console.log(bus)
    return this.admser.insertBus(bus).subscribe((data)=>
    {this.toastr.success("Registration successful", "Success");
    this.route.navigate(["/AdminBuses"])}

  )}
  

}
