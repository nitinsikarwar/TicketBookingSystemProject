import { Component, Inject, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  ngOnInit(): void {
    
  }
  user:any
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private usrser:UserServiceService, private route:Router){
        this.user =  usrser.getUser()
  }

  insertProfile(data:any){
      
      
      return this.usrser.updateProfile(data).subscribe((data: any)=>{
        console.log(data)
        this.toastr.success("Registration successful", "Success");
        this.route.navigate(["/reg_log"]) }
              )

  }



}


