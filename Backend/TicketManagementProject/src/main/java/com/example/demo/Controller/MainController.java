package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.RouteMatcher.Route;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Bus;
import com.example.demo.Entity.Routes;
import com.example.demo.Entity.Tickets;
import com.example.demo.Entity.UserDetails;
import com.example.demo.Service.ServiceImplementation;

@RestController
@RequestMapping("/bookingsystem")

public class MainController {
	
	private ServiceImplementation sm;
	
	@Autowired
	public MainController(ServiceImplementation sm) {
		
		this.sm = sm;
	}
	
	//Buses
		@GetMapping("/buses")
		  public List<Bus> getAllBuses() {
	         return sm.DisplayAllBus();
	    }
	
	  @GetMapping("/buses/{id}")
	    public Bus getBusById(@PathVariable int id) {
	        return sm.findByIdBus(id);
	    }

	    @PostMapping("/buses")
	    public void addBus(@RequestBody Bus bus) {
	        sm.InsertBus(bus);
	    }

	    @PutMapping("/buses")
	    public void updateBus( @RequestBody Bus bus) {
	        Bus existingBus = sm.findByIdBus(bus.getBusId());
	        if (existingBus != null) {
	            sm.UpdateBus(existingBus);
	        }
	    }

	    @DeleteMapping("/buses/{id}")
	    public void deleteBus(@PathVariable int id) {
	        sm.deleteBus(id);
	    }

	    
	    //Routes
	    
	    @GetMapping("/routes")
	    public List<Routes> getAllRoutes() {
	        return sm.DisplayAllRoutes();
	    }

	    @GetMapping("/routes/{id}")
	    public Routes getRouteById(@PathVariable int id) {
	        return sm.findByIdRoutes(id);
	    }

	    @PostMapping("/routes")
	    public void addRoute(@RequestBody Routes route) {
	        sm.UpdateRoutes(route);
	    }

	    @PutMapping("/routes")
	    public void updateRoute(@RequestBody Routes route) {
	        Routes existingRoute = sm.findByIdRoutes(route.getRouteId());
	        if (existingRoute != null) {
	           sm.UpdateRoutes(existingRoute);
	        }
	    }

	    @DeleteMapping("/routes/{id}")
	    public void deleteRoute(@PathVariable int id) {
	        sm.deleteRoutes(id);
	    }

	    
	    //Tickets
	    
	    @GetMapping("/tickets")
	    public List<Tickets> getAllTickets() {
	        return sm.DisplayAllTickets();
	    }

	    @GetMapping("/tickets/{id}")
	    public Tickets getTicketById(@PathVariable int id) {
	        return sm.findByIdTickets(id);
	    }

	    @PostMapping("/tickets")
	    public void addTicket(@RequestBody Tickets ticket) {
	        sm.InsertTickets(ticket);
	    }

	    @PutMapping("/tickets")
	    public void updateTicket( @RequestBody Tickets ticket) {
	        Tickets existingTicket = sm.findByIdTickets(ticket.getTicketId());
	        if (existingTicket != null) {
	            sm.UpdateTickets(existingTicket);
	        }
	    }

	    @DeleteMapping("/tickets/{id}")
	    public void deleteTicket(@PathVariable int id) {
	    	sm.deleteTickets(id);
	       	  }
	    
	    //User
	    
	    @GetMapping("/users")
	    public List<UserDetails> getAllUsers() {
	        return sm.DisplayAllUserDetails();
	    }

	    @GetMapping("/users/{id}")
	    public UserDetails getUserById(@PathVariable int id) {
	        return sm.findByIdUserDetails(id);
	    }

	    @PostMapping("/users")
	    public void addUser(@RequestBody UserDetails user) {
	    	sm.InsertUserDetails(user);
	    }

	    @PutMapping("/users")
	    public void updateUser( @RequestBody UserDetails user) {
	        UserDetails existingUser = sm.findByIdUserDetails(user.getuId());
	        if (existingUser != null) {
	            sm.UpdateUserDetails(user);
	        }
	    }
	    
	    @DeleteMapping("/users/{id}")
	    public void deleteUser(@PathVariable int id) {
	    	sm.deleteUserDetails(id);
	       	  }
	    @GetMapping("/users/validate")
	    public List<UserDetails> validateUser( @RequestBody String validate) {
//	    	System.out.println(validate);
	    	String[] str = validate.split("\"");
//	    	for (String s:str)System.out.print(s+"\n");
	    	System.out.println(str[7]+"  "+ str[3]);
	    	return  sm.findByUserNameAndPasswordUser( str[3], str[7]);
	        
	    }
	    
	    @GetMapping("/admin")
	    public List<Admin> validateAdmin(){
	    	return sm.findAllAdmin();
	    } 
	    
	    @GetMapping("/tickets/user/{id}")
	    public List<Tickets> findByUID(@PathVariable int id) {
	        return sm.findByUID(id);
	    }
	    		
	        
	    }
	   

	
	
	











