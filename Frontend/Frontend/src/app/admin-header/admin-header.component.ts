import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

constructor(private admser:AdminServiceService, private route:Router){}

  async details(){

    this.showBuses();
    this.showRoute();
    this.showTicket();
     setTimeout(() => {
      
     
      
    this.route.navigate(["/AdminHomePage"])
  }, 5000);

  }
  
async showBuses ()
 
{
  return this.admser.showAllBuses().subscribe((data:any)=>
  {
    this.admser.setBusList(data);
    console.log(this.admser.getBusList())
  })
}

  async showRoute(){
 
    {
      
      return this.admser.showAllRoutes().subscribe((data:any)=>
      {
        this.admser.setRouteList(data);
        console.log(this.admser.getRouteList())
      })}
      
    }
    async showTicket(){
 
      {
        
        return this.admser.showTicket().subscribe((data:any)=>
        {
          this.admser.setTicketList(data);
          console.log(this.admser.getTicketList())
        })}
        
      }
      async showUser(){
 
        {
          
          return this.admser.showUser().subscribe((data:any)=>
          {
            this.admser.setUsersList(data);
            console.log(this.admser.getUsersList())
          })}
          
        }

  }


