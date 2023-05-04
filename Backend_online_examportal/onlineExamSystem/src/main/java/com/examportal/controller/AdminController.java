package com.examportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Admin;
import com.examportal.repo.AdminRepository;
import com.examportal.service.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService adminService ;
	
	// get admin detail by admin_name
	
	@GetMapping("/admin/{name}")
	public Admin getAdminDetails(@PathVariable("name") String name){
		return this.adminService.getAdmin(name);
	}

}
