package com.example.demo.Persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.UserDetails;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	@Query("from Admin where username=?1 and password=?2")
	public List<Admin> findByUsernameAndPassword(String username, String password);

}
