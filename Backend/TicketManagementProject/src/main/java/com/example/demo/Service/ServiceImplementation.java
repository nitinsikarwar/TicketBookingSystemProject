package com.example.demo.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Bus;
import com.example.demo.Entity.Routes;
import com.example.demo.Entity.Tickets;
import com.example.demo.Entity.UserDetails;
import com.example.demo.Persistance.AdminRepository;
import com.example.demo.Persistance.BusRepository;
import com.example.demo.Persistance.RoutesRepository;
import com.example.demo.Persistance.TicketsRepository;
import com.example.demo.Persistance.UserDetailsRepository;

@Service
public class ServiceImplementation implements ServiceDeclaration {

	private BusRepository bs;
	private RoutesRepository rs;
	private TicketsRepository ts;
	private UserDetailsRepository us;
	private AdminRepository as;
	
	
	@Autowired
	public ServiceImplementation(BusRepository bs, RoutesRepository rs, TicketsRepository ts,
			UserDetailsRepository us, AdminRepository as) {
		this.bs = bs;
		this.rs = rs;
		this.ts = ts;
		this.us = us;
		this.as= as;
	}

	@Override@Transactional
	public List<UserDetails> DisplayAllUserDetails() {
		// TODO Auto-generated method stub
		return us.findAll();
	}

	@Override@Transactional
	public UserDetails findByIdUserDetails(int id) {
		// TODO Auto-generated method stub
		return us.findById(id).get();
	}

	@Override@Transactional
	public void InsertUserDetails(UserDetails userDetails) {
		us.save(userDetails);
		
	}

	@Override@Transactional
	public void UpdateUserDetails(UserDetails userDetails) {
		us.save(userDetails);
		
		
	}

	@Override@Transactional
	public String deleteUserDetails(int id) {
		us.deleteById(id);
		return "Success";
	}

	@Override@Transactional
	public List<Routes> DisplayAllRoutes() {
		// TODO Auto-generated method stub
		return rs.findAll();
	}

	@Override@Transactional
	public Routes findByIdRoutes(int id) {
		// TODO Auto-generated method stub
		return rs.findById(id).get();
	}

	@Override@Transactional
	public void InsertRoutes(Routes route) {
		rs.save(route);
		
	}

	@Override@Transactional
	public void UpdateRoutes(Routes route) {
		rs.save(route);
		
	}

	@Override@Transactional
	public String deleteRoutes(int id) {
		// TODO Auto-generated method stub
		
		rs.deleteById(id);
		return "Success";
	}

	@Override@Transactional
	public List<Tickets> DisplayAllTickets() {
		// TODO Auto-generated method stub
		return ts.findAll();
	}

	@Override@Transactional
	public Tickets findByIdTickets(int id) {
		// TODO Auto-generated method stub
		return ts.findById(id).get();
	}

	@Override@Transactional
	public void InsertTickets(Tickets ticket) {
		ts.save(ticket);
		
	}

	@Override@Transactional
	public void UpdateTickets(Tickets ticket) {
		ts.save(ticket);
		
	}

	@Override@Transactional
	public String deleteTickets(int id) {
		ts.deleteById(id);
		return "Success";
	}

	@Override
	@Transactional
	public List<Bus> DisplayAllBus() {
		// TODO Auto-generated method stub
		return bs.findAll();
	}

	@Override@Transactional
	public Bus findByIdBus(int id) {
		// TODO Auto-generated method stub
		return bs.findById(id).get();
	}

	@Override@Transactional
	public void InsertBus(Bus bus) {
		bs.save(bus);
		
	}

	@Override
	@Transactional
	public void UpdateBus(Bus bus) {
		bs.save(bus);
		
	}

	@Override
	@Transactional
	public String deleteBus(int id) {
		Bus bus = findByIdBus(id);
		System.out.print(bus);
		bs.delete(bus);
		return "Success";
	}

	@Override@Transactional
	public List<UserDetails> findByUserNameAndPasswordUser(String username, String password) {
		// TODO Auto-generated method stub
		return us.findByUsernameAndPassword(username, password);
	}
	
	@Override@Transactional
	public List<Admin> findAllAdmin() {
		// TODO Auto-generated method stub
		return as.findAll();
	}

	@Override
	public List<Tickets> findByUID(int id) {
		// TODO Auto-generated method stub
		return ts.findByUID(id);
	}

	

}
