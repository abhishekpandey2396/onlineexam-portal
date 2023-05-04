package com.examportal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.examportal.model.Exam;

public interface ExamService {

	public List<Exam> getAllExam();
	public Exam getParticularExam(int id);
	public Exam addNewExam(Exam exam );
	public void deletExam(int id);
}
