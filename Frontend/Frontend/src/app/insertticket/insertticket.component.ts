import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';

declare var Razorpay: any;
@Component({
  selector: 'app-insertticket',
  templateUrl: './insertticket.component.html',
  styleUrls: ['./insertticket.component.css']
})
export class InsertticketComponent implements OnInit{
  ngOnInit(): void {
    
  }
constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private usrser:UserServiceService, private route:Router){}

  insTicket(data:any){
    data.userId = this.usrser.getUser().uId
    data.busId=this.usrser.getBus()
    console.log(data)
    this.usrser.insertTicket(data).subscribe((data)=>{
      console.log(data)
      this.toastr.success("Ticket Insertion successful", "Success");
      this.route.navigate(["/showTicket"])

    })

  }
  message= "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
  "key": "rzp_test_aObViLPvnVz3z1",
  "amount": "1000",
  "name": "Oswal Travels",
  "description": "Web Development",
  "image": "assets/Images/logo.png",
  "order_id": "",
  "handler": function (response: any) {
  var event = new CustomEvent("payment.success",
  {
  detail: response,
  bubbles: true,
  cancelable: true
  }
  );
  window.dispatchEvent(event);
  },
  "prefill": {
  "name": "",
  "email": "",
  "contact": ""
  },
  "notes": {
  "address": ""
  },
  "theme": {
  "color": "#3399cc"
  }
  };
  paynow(data:any) {
    this.usrser.setBusDetails(data)
  this.paymentId = '';
  this.error = '';
  this.options.amount = "100000"; //paisa
  this.options.prefill.name = "Sumukha";
  this.options.prefill.email = "sumukha@gmail.com";
  this.options.prefill.contact = "9908592010";
  var rzp1 = new Razorpay(this.options);
  rzp1.open();
  rzp1.on('payment.failed', function (response: any) {
  console.log(response.error.code);
  
  console.log(response.error.description);
  console.log(response.error.source);
  console.log(response.error.step);
  console.log(response.error.reason);
  console.log(response.error.metadata.order_id);
  console.log(response.error.metadata.payment_id);
  }
  );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: SubmitEvent): void {
  this.message = "Success Payment";
  
  this.insTicket(this.usrser.getBusDetails())
  
  
  }


}
