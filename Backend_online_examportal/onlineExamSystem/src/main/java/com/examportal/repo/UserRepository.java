package com.examportal.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.examportal.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
   
	  public User findByEmail(String email);
}
