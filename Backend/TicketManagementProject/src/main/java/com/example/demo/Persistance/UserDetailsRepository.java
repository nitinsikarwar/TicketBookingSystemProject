package com.example.demo.Persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.UserDetails;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {
		
		@Query("from UserDetails where username=?1 and password=?2")
		public List<UserDetails> findByUsernameAndPassword(String username, String password);
}
