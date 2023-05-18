
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

import { TOASTR_TOKEN, Toastr } from '../toastr.service';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css']
})
export class UpdateRouteComponent implements OnInit {
  
  route:any
  routelist:any
  ngOnInit(): void {
    this.getRouteDetails(this.admser.getId());
  }
  
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser:AdminServiceService, private router:Router){
    console.log(this.admser.getId())
    this.route = this.getRouteDetails(this.admser.getId());
    console.log(this.route)
    console.log(this.routelist)


  }

  routeUpdate(form:any){
    console.log(form)
    form.routeId = this.admser.getId(); 
    this.admser.insertRoute(form).subscribe((data)=>{
      this.toastr.success("Route Updation successful", "Success");
    this.router.navigate(["/AdminRoute"]) })
  }


  getRouteDetails(id:any){
      this.routelist = this.showRoute();
      for(let i=0;i<this.routelist.length;i++){
              if(id==this.routelist[i].routeId)this.route=this.routelist[i];
      }

  }
  
  showRoute(){
 
    {
      return this.admser.showAllRoutes().subscribe((data:any)=>
      {
        
        this.routelist=data;
        console.log(this.admser.getId()+" "+data)
        
        
      })
    }


  }
}
