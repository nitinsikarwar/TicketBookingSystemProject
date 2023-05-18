package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Bus;
import com.example.demo.Entity.Routes;
import com.example.demo.Entity.Tickets;
import com.example.demo.Entity.UserDetails;

public interface ServiceDeclaration {
	public List<UserDetails> DisplayAllUserDetails();
	public UserDetails findByIdUserDetails(int id);
	public void InsertUserDetails(UserDetails UserDetails);
	public void UpdateUserDetails(UserDetails student);
	public String deleteUserDetails(int id);
	public List<UserDetails> findByUserNameAndPasswordUser(String username,String password);
	
	public List<Admin> findAllAdmin();
	
	public List<Tickets> findByUID(int id);
	
	public List<Routes> DisplayAllRoutes();
	public Routes findByIdRoutes(int id);
	public void InsertRoutes(Routes route);
	public void UpdateRoutes(Routes route);
	public String deleteRoutes(int id);
	
	public List<Tickets> DisplayAllTickets();
	public Tickets findByIdTickets(int id);
	public void InsertTickets(Tickets ticket);
	public void UpdateTickets(Tickets ticket);
	public String deleteTickets(int id);
	
	public List<Bus> DisplayAllBus();
	public Bus findByIdBus(int id);
	public void InsertBus(Bus UserDetails);
	public void UpdateBus(Bus student);
	public String deleteBus(int id);
	

}
