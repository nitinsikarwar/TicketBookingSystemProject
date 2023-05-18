package com.example.demo.Persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Bus;

public interface BusRepository extends JpaRepository<Bus, Integer> {

}
