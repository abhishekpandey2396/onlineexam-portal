package com.examportal.service;

import java.util.List;

import com.examportal.model.Subject;

public interface SubjectService {

	public List<Subject> getAllSubjects();
	public Subject addNewSubject(Subject subject);
	public String deleteSubject(String name);
}
