package com.examportal.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.examportal.model.Result;



@Repository
public interface ResultRepository extends JpaRepository<Result, Integer> {

	  public List<Result> findByEmail(String email );
}
