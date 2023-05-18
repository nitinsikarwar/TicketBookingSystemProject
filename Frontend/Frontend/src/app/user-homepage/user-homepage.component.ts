
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

import { Component, Inject, OnInit } from '@angular/core';
import { TOASTR_TOKEN, Toastr } from '../toastr.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit{
to:any
from:any

  buslist:any
  filterlist :any;
  
  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr,private usrser:UserServiceService, private route:Router){
    this.showBuses()
    
this.toastr.success("Login successful", "Success");
    this.to=Number
    this.from=Number
    console.log(usrser.getBuslist())
    this.filterlist= usrser.getBuslist()
    
  }
  ngOnInit(): void {
    // console.log(this.filterlist)
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
    
    
    //console.log(data)
    
    
  })
}


}

// result : any

// initialObjArray.forEach(item => {
//   let count = result.filter(x => x.lat == item.lat && x.lon == item.lon).length

//   if(count == 0) {
//     result.push(item)
//   }
// })



selectedOption: any;
selectedOption1: any;

  onSubmit() {
    console.log('Selected option:', this.selectedOption+" "+this.selectedOption1);
    this.usrser.setBuslist ( this.buslist.filter((b: { route: {
      to: any; from: any; }; }) => b.route.from ==this.selectedOption && b.route.to ==this.selectedOption1));
    console.log(this.usrser.getBuslist())
    this.filterlist = this.usrser.getBuslist()
    this.ngOnInit()
    
  }

}
