package com.examportal.service.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.model.Subject;
import com.examportal.repo.SubjectRepository;
import com.examportal.service.SubjectService;

@Service
public class SubjectServiceImpl implements SubjectService{
	
	@Autowired
	private SubjectRepository subjectRepository;

	@Override
	public List<Subject> getAllSubjects() {
		// TODO Auto-generated method stub
		return (List<Subject>) this.subjectRepository.findAll();
	}

	@Override
	public Subject addNewSubject(Subject subject) {
		// TODO Auto-generated method stub
		return this.subjectRepository.save(subject);
	}

	@Override
	public String deleteSubject(String name) {
		// TODO Auto-generated method stub
		int row = this.subjectRepository.deleteByName(name);
		return row+"No of Rows deleted";
	}

}
