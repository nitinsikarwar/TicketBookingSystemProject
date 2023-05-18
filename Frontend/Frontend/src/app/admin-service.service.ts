import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
id:number
busid:number
user:any
homePage:any
userlist:any
ticketlist:any
buslist:any
routelist:any
userslist:any
  constructor(private http:HttpClient) {
      this.id=-1;
      this.busid = -1;
      
   }
   getUsersList(){return this.userslist;}
  setUsersList(ul:any){this.userslist=ul}

   getBusList(){return this.buslist}
   setBusList(bus:any){this.buslist= bus}

   getRouteList(){return this.routelist}
   setRouteList(route:any){this.routelist=route}

   GetHomePage(){return this.homePage}

   setHomePage(homepage:any){this.homePage = homepage}
  getUserList(){return this.userlist;}
  setUserList(ul:any){this.userlist=ul}

  getTicketList(){return this.userlist;}
  setTicketList(ul:any){this.userlist=ul}

   getUser(){return this.user;}
   setUser(user:any){this.user = user}

   getBusId(){
    return this.busid;}
    setBusId(id:any){this.busid= id}
   getId(){
   return this.id;}
   setId(id:any){this.id= id}
   validateAdmin()
   {
    return this.http.get("/bookingsystem/admin");
   }

   showAllBuses()
  {
   return this.http.get("/bookingsystem/buses");
  }
  showAllRoutes()
  {
   return this.http.get("/bookingsystem/routes");
  }
  insertBus(data:any){
    return this.http.post("/bookingsystem/buses", data);
  }
  insertRoute(data:any){
    return this.http.post("/bookingsystem/routes", data);
  }
  deleteBus(data:any){
    return this.http.delete("/bookingsystem/buses/"+data);
  }
  deleteRoute(data:any){
    return this.http.delete("/bookingsystem/routes/"+data);
  }
  updateBus(data:any){
    return this.http.put("/bookingsystem/buses", data);
  }
  updateRoute(data:any){
    return this.http.put("/bookingsystem/routes", data);
  }

  showTicket(){
    return this.http.get("/bookingsystem/tickets");
  }
  showUser(){
    return this.http.get("/bookingsystem/users");
  }
}
