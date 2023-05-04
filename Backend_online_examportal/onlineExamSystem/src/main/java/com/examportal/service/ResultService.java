package com.examportal.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.examportal.model.Result;

public interface ResultService {

	public List<Result> getAllResult();
	public  Result addNewResult(Result result);
	public List<Result> getAllResultForStudent(String email);
}
