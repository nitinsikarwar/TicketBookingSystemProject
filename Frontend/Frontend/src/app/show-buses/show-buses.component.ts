import { Component, HostListener, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
declare var Razorpay: any;
@Component({
  selector: 'app-show-buses',
  templateUrl: './show-buses.component.html',
  styleUrls: ['./show-buses.component.css']
})
export class ShowBusesComponent implements OnInit {
  buslist:any
  ngOnInit(): void {
    
  }
  constructor(private usrser:UserServiceService, private route:Router){
    this.showBuses()
  }
  message= "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
  "key": "rzp_test_aObViLPvnVz3z1",
  "amount": "999",
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
  this.options.amount = "99999"; //paisa
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
  this.insertTicket(this.usrser.getBusDetails())
  
  
  }

  insertTicket(id:any){
      this.usrser.setBus(id)
      this.route.navigate(["/insertTicket"])
  }


showBuses(){
 
{
  return this.usrser.showAllBuses().subscribe((data:any)=>
  {
    
    this.buslist=data;
    console.log(data)
    
    
  })
}


}}
