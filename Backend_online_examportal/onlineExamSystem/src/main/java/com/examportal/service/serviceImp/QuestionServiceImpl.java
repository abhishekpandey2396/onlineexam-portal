package com.examportal.service.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.model.Question;
import com.examportal.repo.QuestionRepository;
import com.examportal.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionRepository questionRepository;
	
	
	@Override
	public List<Question> getAllQuestion() {
		// TODO Auto-generated method stub
		return this.questionRepository.findAll();
	}

	@Override
	public Question addNewQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(question);
	}

	@Override
	public List<Question> getAllQuestionForExam(int id) {
		// TODO Auto-generated method stub
		return this.questionRepository.findByEnameId(id);
	}

	@Override
	public Question updateQuestion(int id, Question updatedquestion) {
		// TODO Auto-generated method stub
		if(this.questionRepository.existsById(updatedquestion.getId())) {
			this.questionRepository.save(updatedquestion);
		}else {
			System.out.println("Question does not exists");
		}
		return updatedquestion;
	}

	@Override
	public void deleteQuestion(int id) {
		// TODO Auto-generated method stub
		this.questionRepository.deleteById(id);
	}

}
