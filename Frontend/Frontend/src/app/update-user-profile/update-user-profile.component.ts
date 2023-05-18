import { Component, Inject, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit{
  ngOnInit(): void {
    
  }
  user:any
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private usrser:UserServiceService, private route:Router){
        this.user =  usrser.getUser()
  }

  updateProfile(data:any){
      data.uId = this.user.uId
      this.usrser.setUser(data)
      return this.usrser.updateProfile(data).subscribe((data: any)=>{
        console.log(data)
        this.toastr.success("Profile updation successful", "Success");
        this.route.navigate(["/UserProfile"]) }
              )

  }



}
