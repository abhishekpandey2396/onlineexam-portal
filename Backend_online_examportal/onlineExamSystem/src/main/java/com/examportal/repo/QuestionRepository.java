package com.examportal.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.examportal.model.Question;



@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
	
	public List<Question> findByEnameId(int id);

}
