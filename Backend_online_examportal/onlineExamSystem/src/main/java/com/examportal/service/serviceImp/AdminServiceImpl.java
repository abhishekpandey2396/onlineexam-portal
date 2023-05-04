package com.examportal.service.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.model.Admin;
import com.examportal.repo.AdminRepository;
import com.examportal.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepository;

	@Override
	public Admin getAdmin(String name) {
		// TODO Auto-generated method stub
		return this.adminRepository.findByName(name);
	}

}
