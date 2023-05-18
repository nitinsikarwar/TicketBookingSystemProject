import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  ngOnInit(): void {
    
  }
    
    //validate:any
    user:any
    userlist:any
    flag:any
    constructor(private usrser:UserServiceService, private route:Router){
      this.validateUser()
      this.flag=false
      this.user = this.usrser.getUser()
    }
  
    userLogin(data:any){
      console.log(data)
      
      console.log(this.userlist)
      console.log(data.username);
      
      // this.userlist.forEach(function(u:any){
      //   if(u.username===data.username)
      //   this.route.navigate(["UserHomepage"]);
      // });
  
      for(let i=0; i<this.userlist.length; i++){
        if(this.userlist[i].username===data.username && this.userlist[i].password===data.password) //use i instead of 0
       { this.flag=true
        this.route.navigate(["/UserHomepage"]); } 
      }
      if(this.flag==false)alert("Invalid credentials");
  
  
      // const user = this.userlist.find((u:any) => u.username === data.value.username && u.password === data.value.password);
      
  
       }
  
    
  
    validateUser()
  {
    return this.usrser.validateUser().subscribe((data:any)=>
    {
      
      this.userlist=data;
      console.log(this.userlist);
      
    })
  }
  
  }
  