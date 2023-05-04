package com.examportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Subject;
import com.examportal.repo.SubjectRepository;
import com.examportal.service.SubjectService;

@RestController
public class SubjectController {
	
	 @Autowired
	 private SubjectService subjectService;
	 
	    //to get all subject
	   @GetMapping("/subject")
	   public List<Subject> getAllSubjects(){
		   return  (List<Subject>)this.subjectService.getAllSubjects();
	   }
	 
	    //to add a new subject
	   @PostMapping("/subject")
	    public Subject addNewSubject(@RequestBody Subject subject ){
		   return  this.subjectService.addNewSubject(subject);
	    }
	   
	    // to delete a subject
	   @DeleteMapping("/subject/{name}")
	    public String deleteSubject(@PathVariable("name") String name){
		  return this.subjectService.deleteSubject(name);
		     
		}

}
