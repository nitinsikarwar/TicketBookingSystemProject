package com.example.demo.Persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.Tickets;
import com.example.demo.Entity.UserDetails;

public interface TicketsRepository extends JpaRepository<Tickets, Integer> {
		
	@Query("from Tickets where userId=?1 ")
	public List<Tickets> findByUID(int id);
}
