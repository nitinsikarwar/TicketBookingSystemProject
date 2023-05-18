import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-route',
  templateUrl: './user-route.component.html',
  styleUrls: ['./user-route.component.css']
})
export class UserRouteComponent implements OnInit {

  routelist:any
  constructor(private usrser:UserServiceService, private route:Router){
    this.showRoute()
    console.log(this.routelist)
  }
  ngOnInit(): void {
  }





showRoute(){
 
{
  return this.usrser.showAllRoutes().subscribe((data:any)=>
  {
    
    this.routelist=data;
    console.log(data)
    
    
  })
}


}}




