import { Component, Inject, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.css']
})
export class UpdateticketComponent implements OnInit {

 ngOnInit(): void {
    
}
constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private usrser:UserServiceService, private route:Router){
  

  
  
  }
insTicket(data:any){
  data.ticketId = this.usrser.getTId();
  data.userId = this.usrser.getUser().uId
  data.busId=this.usrser.getBus()
  console.log(data.busId)
  this.usrser.insertTicket(data).subscribe((data)=>{
    console.log(data)
    this.toastr.success("Ticket updation successful", "Success");
    this.route.navigate(["/showTicket"])

  })

}


}
