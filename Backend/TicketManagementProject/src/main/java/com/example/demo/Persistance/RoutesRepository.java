package com.example.demo.Persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Routes;

public interface RoutesRepository extends JpaRepository<Routes, Integer> {

}
