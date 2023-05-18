import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

  ngOnInit(): void {
    
  }
    
    //validate:any
    user:any
    
    constructor(private admser:AdminServiceService, private route:Router){
      
      this.user = this.admser.getUser()
      console.log(this.user)
      
    }
}