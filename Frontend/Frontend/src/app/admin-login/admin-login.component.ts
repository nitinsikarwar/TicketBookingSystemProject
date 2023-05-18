import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent  implements OnInit {
  ngOnInit(): void {
    
  }
  admin:any
  adminlist:any
  flag:any
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private admser:AdminServiceService, private route:Router){
    this.validateAdmin()
    this.flag=false
  }

  adminLogin(data:any){
    // console.log(data)
    
    // console.log(this.adminlist)
    // console.log(data.username);
    
    // this.userlist.forEach(function(u:any){
    //   if(u.username===data.username)
    //   this.route.navigate(["UserHomepage"]);
    // });

    for(let i=0; i<this.adminlist.length; i++){
      if(this.adminlist[i].userName===data.username && this.adminlist[i].password===data.password) //use i instead of 0
     { this.flag=true
      this.admser.setUser(this.adminlist[i]);
      console.log(this.admser.getUser())
      this.details()
       } 
    }
    if(this.flag==false) this.toastr.error("Login Failed", "Error");


    // const user = this.userlist.find((u:any) => u.username === data.value.username && u.password === data.value.password);
    

     }

  

  validateAdmin()
{
  return this.admser.validateAdmin().subscribe((data:any)=>
  {
    
    this.adminlist=data;
    //console.log(this.adminlist);
    
  })
}

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