package com.examportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Result;
import com.examportal.repo.ResultRepository;
import com.examportal.service.ResultService;


@RestController
public class ResultController {

	  @Autowired
	  private ResultService resultService;
	  
	  //get all result present in database
	  @GetMapping("/result")
	  public List<Result> getAll(){
		  return (List<Result>)this.resultService.getAllResult();
	  }
	  
	  
	   //to save result 
	  @PostMapping("/result")
	  public  Result addNew(@RequestBody Result result){
		  return this.resultService.addNewResult(result);
	  }
	  
	   //get all result of a particular student 
	  @GetMapping("/user/{email}/result")
	  public List<Result> getAllResultForStudent(@PathVariable("email") String email){
		  return this.resultService.getAllResultForStudent(email);
		  
	  }
	  
}
