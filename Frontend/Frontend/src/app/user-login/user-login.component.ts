import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  //validate:any
  user:any
  userlist:any
  flag:any
  constructor(private usrser:UserServiceService, private route:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr){
    this.validateUser()
    this.flag=false
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
      this.usrser.setUser(this.userlist[i])
      
      this.showBuses()
      setTimeout(() => {
        this.route.navigate(["/UserHomepage"]); 
      }, 5000);
      } 
    }
    if(this.flag==false)this.toastr.error("Invalid Credentials", "Sorry");


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


showBuses(){
 
  {
    return this.usrser.showAllBuses().subscribe((data:any)=>
    {
      
      this.usrser.setBuslist(data)
      
      //console.log(data)
      
      
    })
  }
}
}
