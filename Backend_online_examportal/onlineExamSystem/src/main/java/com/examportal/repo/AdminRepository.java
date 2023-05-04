package com.examportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.examportal.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
 
	    public Admin findByName(String name);
}
