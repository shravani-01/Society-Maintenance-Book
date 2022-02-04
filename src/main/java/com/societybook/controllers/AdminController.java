package com.societybook.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.societybook.entities.Society;
import com.societybook.entities.Transaction;
import com.societybook.entities.User;
import com.societybook.service.AdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
		
	@Autowired
	private AdminService adminService;

	@GetMapping("/allusers")
	public ResponseEntity<Collection<User>> getAllUsers() {
		Collection<User> users = adminService.getAllUsers();
		if(users == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(users);
	}

	@GetMapping("/defaulters")
	public ResponseEntity<List<User>> getDefaulters() {
		List<User> defaulters = adminService.defaulters();
		if(defaulters == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(defaulters);
	}

	@PostMapping("/addRecord/{id}")
	public ResponseEntity<User> addRecord(@PathVariable String id, @RequestBody Transaction txn) {
		User user = adminService.addRecord(id, txn);
		if(user == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(user);
	}

	@PostMapping("/deleteDue/{id}")
	public ResponseEntity<User> deleteDue(@PathVariable String id, @RequestBody Transaction txn) {
		User user = adminService.deleteDue(id, txn);
		if(user != null) {
			return ResponseEntity.ok(user);
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}

	@PostMapping("/updateUser")
	public ResponseEntity<Void> updateUser(@RequestBody User user) {
		try {
			adminService.updateUser(user);
			return ResponseEntity.ok(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}

	@PostMapping("/addUser")
	public ResponseEntity<Void> addUser(@RequestBody User user) throws NoSuchAlgorithmException {
		String msg = adminService.addUser(user);
		if(msg.equals("Success")) {
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}
	

	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<Collection<User>> deleteUser(@PathVariable String id) {
		try {
			Collection<User> users = adminService.deleteUser(id);
			return ResponseEntity.ok(users);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@GetMapping("/societydetails")
	public ResponseEntity<Society> getSocietyDetails() {
		Society society = adminService.getSocietyDetails();
		if(society != null) {
			return ResponseEntity.ok(society);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PostMapping("/societydetails")
	public ResponseEntity<Society> setSocietyDetails(@RequestBody Society soc) {
		Society society = adminService.setSocietyDetails(soc);
		if(society != null) {
			return ResponseEntity.ok(society);
		}
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@GetMapping("/societyyearly")
	public ResponseEntity<HashMap<String, List<String>>> getYearlyDetails() {
		HashMap<String, List<String>> hashmap = adminService.getYearlyDetails();
		if(hashmap.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(hashmap);
	}
}
