package com.examportal.service.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.model.User;
import com.examportal.repo.AdminRepository;
import com.examportal.repo.UserRepository;
import com.examportal.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAllDetails() {
		// TODO Auto-generated method stub
		return (List<User>) userRepository.findAll();
	}

	@Override
	public User getUserDetails(String email) {
		// TODO Auto-generated method stub
		return this.userRepository.findByEmail(email);
	}

	@Override
	public User addNewUser(User user) {
		// TODO Auto-generated method stub
		return this.userRepository.save(user);
	}

}
