
import { AdminServiceService } from '../admin-service.service';

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';

@Component({
  selector: 'app-admin-route',
  templateUrl: './admin-route.component.html',
  styleUrls: ['./admin-route.component.css']
})
export class AdminRouteComponent implements OnInit{
  ngOnInit(): void {
    this.showRoute()
    console.log(this.routelist)
   
  }
  routelist:any
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser:AdminServiceService, private route:Router){
    this.showRoute()
    console.log(this.routelist)
  }


deleteRoute(id:any){
console.log(id)
  return this.admser.deleteRoute(id).subscribe((data:any)=>
  {
    this.toastr.success("Deleted successfully", "Success");
    this.routelist=data;
    console.log(data)
    this.ngOnInit();
    
    
  })
}

updateRoute(id:any){
  this.admser.setId(id);
  this.route.navigate(["/AdminRoute/RouteUpdation"]);
}

showRoute(){
 
{
  return this.admser.showAllRoutes().subscribe((data:any)=>
  {
    
    this.routelist=data;
    console.log(data)
    
    
  })
}


}}



