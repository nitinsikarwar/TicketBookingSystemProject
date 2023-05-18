package com.example.demo.Entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name="bus")
public class Bus {
	@Id   
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="busId")
	private int busId;//pk
	
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Column(name="busType")
	private String busType;
	@Column(name="description")
	private String description;
	@Column(name="email")
	private String email;
	@Column(name="rating")
	private Integer rating;//pk
	@Column(name="price")
	private double price ;
	@Column(name="timing")
	private Time timing;
	@Column(name="routeId")
	int routeId; //fk
	
	
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	@ManyToOne(targetEntity = Routes.class, fetch = FetchType.EAGER)
	@JoinColumn(name="routeId",insertable = false,updatable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Routes route;
	
	
	public Routes getRoute() {
		return route;
	}
	public void setRoute(Routes route) {
		this.route = route;
	}
	public int getRating() {
		return rating;
	}
	
	@Override
	public String toString() {
		return "Bus [busId=" + busId + ", busType=" + busType + ", description=" + description + ", email=" + email
				+ ", rating=" + rating + ", price=" + price + ", timing=" + timing + ", routeId=" + routeId + ", route="
				+ route + "]";
	}

	
	public Bus() {
		super();
	}
	public Bus(int busId, String busType, String description, String email, int price, Time timing,
			int routeId) {
		super();
		this.busId = busId;
		this.busType = busType;
		this.description = description;
		this.email = email;
		this.price = price;
		this.timing = timing;
		this.routeId = routeId;
	}
	public int getBusId() {
		return busId;
	}
	public void setBusId(int busId) {
		this.busId = busId;
	}
	public String getBusType() {
		return busType;
	}
	public void setBusType(String busType) {
		this.busType = busType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getSeatsAvailable() {
		return price;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public void setSeatsAvailable(int price) {
		this.price = price;
	}
	public Time getTiming() {
		return timing;
	}
	public void setTiming(Time timing) {
		this.timing = timing;
	}
	public int getRouteId() {
		return routeId;
	}
	public void setRouteId(int routeId) {
		this.routeId = routeId;
	}
	

}
