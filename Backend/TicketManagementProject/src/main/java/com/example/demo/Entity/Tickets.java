package com.example.demo.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name="tickets")
public class Tickets {
	@Id   
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ticketId")
	private int ticketId;//pk
	@Column(name="busId")
	private int busId; //fk
	
	@Column(name="dateOfTravel")
	private Date dateOfTravel;
	
	@Column(name="phone")
	private long phone;
	@Column(name="dob")
	private Date dob;   //Name ,  Address , , email 
	@Column(name="address")
	private String address; 
	@Column(name="email")
	private String email; 
	@Column(name="name")
	private String name; 
	@Column(name="userId")
	int userId; //fk
	
	@ManyToOne(targetEntity = UserDetails.class, fetch = FetchType.EAGER)
	@JoinColumn(name="userId",insertable = false,updatable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private UserDetails user;
	
	@OneToOne(targetEntity = Bus.class, fetch = FetchType.EAGER)
	@JoinColumn(name="busId",insertable = false,updatable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Bus bus;


	public int getTicketId() {
		return ticketId;
	}


	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}


	public int getBusId() {
		return busId;
	}


	public void setBusId(int busId) {
		this.busId = busId;
	}


	public Date getDateOfTravel() {
		return dateOfTravel;
	}


	public void setDateOfTravel(Date dateOfTravel) {
		this.dateOfTravel = dateOfTravel;
	}


	public long getPhone() {
		return phone;
	}


	public void setPhone(long phone) {
		this.phone = phone;
	}


	public Date getDob() {
		return dob;
	}


	public void setDob(Date dob) {
		this.dob = dob;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public void setName(String name) {
		this.name = name;
	}


	
	
	
	
	

}
