
import { AdminServiceService } from '../admin-service.service';

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent {
id:any
  Bus:any
  Buslist:any
  ngOnInit(): void {
    
  }
  
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser:AdminServiceService, private router:Router, private http:HttpClient){
    this.id = this.admser.getBusId()
    //this.Bus = this.getBusDetails(this.admser.getId());
   // console.log(this.Bus)
   // console.log(this.Buslist)


  }

  BusUpdate(form:any){
   // console.log(form)
    //console.log(this.admser.getId())
    //console.log(form)
    form.busId = this.id;
    console.log(this.id) 
    console.log(form.busIs+"nnnnnnnnnnnnnn")
     this.admser.insertBus(form).subscribe((data)=>{
      this.toastr.success("bus updation successful", "Success");
    this.router.navigate(["/AdminBuses"])
 // console.log(data)
 })
  }


  getBusDetails(id:any){
      this.Buslist = this.showBus();
      for(let i=0;i<this.Buslist.length;i++){
              if(id==this.Buslist[i].BusId)this.Bus=this.Buslist[i];
      }

  }
  
  showBus(){
 
    {
      return this.admser.showAllRoutes().subscribe((data:any)=>
      {
        
        this.Buslist=data;
        console.log(this.admser.getId()+" "+data)
        
        
      })
    }


  }
}

