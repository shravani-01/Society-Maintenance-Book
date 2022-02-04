package com.societybook.controllers;

import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.societybook.entities.Auth;
import com.societybook.entities.User;
import com.societybook.service.LoginService;

@CrossOrigin
@RestController
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/login")
	public ResponseEntity<Optional<User>> addUser(@RequestBody Auth auth) throws NoSuchAlgorithmException {
		System.out.println(auth.getisAdmin());
		Optional<User> user = loginService.authenticate(auth);
		if(user == null ) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
	}
}
