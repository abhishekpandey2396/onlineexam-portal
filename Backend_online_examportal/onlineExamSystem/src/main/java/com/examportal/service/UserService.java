package com.examportal.service;

import java.util.List;

import com.examportal.model.User;

public interface UserService {

	public List<User> getAllDetails();
	public User getUserDetails(String email);
	public User addNewUser(User user);
}
