import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  busdetails:any
  getBusDetails(){return this.busdetails}
  setBusDetails(bus:any){this.busdetails = bus}
  fili:any
  user:any
  busId:any
  ticketId:any
  buslist:any
  getBuslist(){return this.buslist}
  setBuslist(li:any){this.buslist = li}
  getTId(){return this.ticketId}
  setTId(id:any){this.ticketId = id}
  getBus(){ return this.busId}
  setBus(id:any){this.busId = id}
getFili(){this.fili}
setFili(fili:any){this.fili = fili}
  
  getUser(){
    return this.user;
  }

  setUser(user:any){
      this.user = user
  }

  constructor(private http:HttpClient) {

  }
  validateUser()
  {
   return this.http.get("/bookingsystem/users");
  }
  
  showAllBuses()
  {
   return this.http.get("/bookingsystem/buses");
  }
  showAllRoutes()
  {
   return this.http.get("/bookingsystem/routes");
  }

  updateProfile(data:any)
  {
    
   return this.http.post("/bookingsystem/users",data);
  }

  insertTicket(data:any)
  {
    
   return this.http.post("/bookingsystem/tickets",data);
  }
  showTicket(data:any)
  {
   return this.http.get("/bookingsystem/tickets/user/"+data);
  }

  deleteTicket(data:any)
  {
    
   return this.http.delete("/bookingsystem/tickets/"+data);
  }




}
