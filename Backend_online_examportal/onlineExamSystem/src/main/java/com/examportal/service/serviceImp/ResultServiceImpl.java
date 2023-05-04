package com.examportal.service.serviceImp;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.model.Result;
import com.examportal.repo.ResultRepository;
import com.examportal.service.ResultService;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
	private ResultRepository resultRepository;
	
	@Override
	public List<Result> getAllResult() {
		// TODO Auto-generated method stub
		return this.resultRepository.findAll();
	}

	@Override
	public Result addNewResult(Result result) {
		// TODO Auto-generated method stub
	    return this.resultRepository.save(result);
	}
	
	
	@Override
	public List<Result> getAllResultForStudent(String email) {
		// TODO Auto-generated method stub
		return this.resultRepository.findByEmail(email);
	}

}
