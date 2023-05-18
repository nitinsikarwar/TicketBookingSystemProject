import { Component , OnInit} from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.css']
})
export class AdminTicketComponent implements OnInit {
  ticketlist:any
  user:any
  ngOnInit(): void {
    
    this.showTicket()
  }
  constructor(private admser:AdminServiceService, private route:Router){
    
    this.showTicket()
  }





showTicket(){
 
{
   this.admser.showTicket().subscribe((data)=>
  {
    
    this.ticketlist=data;
    console.log(data)
    
    
  })
}

}
}