package com.examportal.repo;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.examportal.model.Exam;

@Repository
public interface ExamRepository extends CrudRepository<Exam, Integer> {

}
