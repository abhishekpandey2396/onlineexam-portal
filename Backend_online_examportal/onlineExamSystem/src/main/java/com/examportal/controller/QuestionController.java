package com.examportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Question;
import com.examportal.service.QuestionService;


@RestController
public class QuestionController {
   
	 @Autowired
	 private QuestionService questionService; 
	   
	   
	 //to show all question present in database
	 @GetMapping("/question")
	 public List<Question> getAll(){
		 return (List<Question>) this.questionService.getAllQuestion(); 
	 }
	 
	
	 //add a question in a particular exam   
	 @PostMapping("/question")
	 public Question addNew(@RequestBody Question question ){
		 return this.questionService.addNewQuestion(question); 
	 }
	 
	 
	 //to get details of all question of that particular exam   (ofcourse using exam_id)  
	 @GetMapping("/exam/{id}/question")
	 public List<Question> getAllQuestionofExam(@PathVariable("id") int id){
		 return this.questionService.getAllQuestionForExam(id);
	 }
	 
	 
	 //edit a question in a particular exam
	 @PutMapping("/question/{id}")
	  public Question update(@PathVariable("id") int id , @RequestBody Question question) {
	  	   	 question.setId(id);
		  return this.questionService.updateQuestion(id, question); 
	  }
	 
	 
	 // delete a question in a particular exam
	 @DeleteMapping("/question/{id}")
	 public void delete(@PathVariable("id") int id) {
		 this.questionService.deleteQuestion(id);
	 }
	 
	 
}
