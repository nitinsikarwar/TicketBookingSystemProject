import { Component , OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showticket',
  templateUrl: './showticket.component.html',
  styleUrls: ['./showticket.component.css']
})
export class ShowticketComponent implements OnInit{
  ticketlist:any
  user:any
  ngOnInit(): void {
    this.user=this.usrser.getUser().uId
    this.showTicket(this.user)
  }
  constructor(private usrser:UserServiceService, private route:Router){
    this.user=this.usrser.getUser().uId
    this.showTicket(this.user)
  }





showTicket(id:any){
 
{
   this.usrser.showTicket(id).subscribe((data)=>
  {
    
    this.ticketlist=data;
    console.log(data)
    
    
  })
}


}

updateTicket(id:any, bid:any){
   
      this.usrser.setTId(id)
      this.usrser.setBus(bid)
      console.log(id)
      this.route.navigate(["/updateTicket"])
  
}
deleteTicket(id:any){

  console.log(id)
  this.usrser.deleteTicket(id).subscribe((data)=>{
  this.ngOnInit();
  })
}

}

