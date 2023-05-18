package com.example.demo.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userDetails")
public class UserDetails {
	@Id   
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="uId")
	private int uId;
	@Column(name="password")
	private String password;
	@Column(name="name")
	private String name;
	@Column(name="address")
	private String address;
	public int getuId() {
		return uId;
	}

	public void setuId(int uId) {
		this.uId = uId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}
	@Column(name="email")
	private String email;
	@Column(name="phone")
	private long phone;
	@Column(name="username")
	private String username ;

	@Column(name="dob")
	private Date dob;
	
	@Override
	public String toString() {
		return "UserDetails "+ ", name=" + name + ", address=" + address + ", email="
				+ email + ", username=" + username + ", dob=" + dob + ", userid=]";
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	

}
