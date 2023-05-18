import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-buses',
  templateUrl: './admin-buses.component.html',
  styleUrls: ['./admin-buses.component.css']
})
export class AdminBusesComponent implements OnInit {
  buslist:any
  constructor(private admser:AdminServiceService, private route:Router){
    this.showBuses()
  }
  ngOnInit(): void {
    this.showBuses()
  }



  deleteBus(id:any){
    console.log(id)
      return this.admser.deleteBus(id).subscribe((data:any)=>
      {
        
        this.buslist=data;
        console.log(data)
        this.ngOnInit();
        
        
      })
    }

    updateBus(id:any){
      this.admser.setBusId(id);
      this.route.navigate(["/AdminBuses/BusUpdation"]);
    }
    


showBuses(){
 
{
  return this.admser.showAllBuses().subscribe((data:any)=>
  {
    
    this.buslist=data;
    console.log(data)
    
    
  })
}


}}

