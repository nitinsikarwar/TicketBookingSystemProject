package com.example.demo.Entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name="routes")
public class Routes {
	@Id   
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="routeId")
	private int routeId;
	@Column(name="source")
	private String source;
	@Column(name="destination")
	private String destination;
	
	@OneToMany(mappedBy="route")
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Set<Bus> buses;
	
	
	
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	
	public Routes() {
		super();
	}
	public Routes(int routeId, String source, String destination) {
		super();
		this.routeId = routeId;
		this.source = source;
		this.destination = destination;
		
	}
	public int getRouteId() {
		return routeId;
	}
	public void setRouteId(int routeId) {
		this.routeId = routeId;
	}
	public String getFrom() {
		return source;
	}
	public void setFrom(String source) {
		this.source = source;
	}
	public String getTo() {
		return destination;
	}
	public void setTo(String destination) {
		this.destination = destination;
	}
	
	

}
