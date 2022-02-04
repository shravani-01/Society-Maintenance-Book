package com.societybook.service;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.societybook.dao.AuthRepository;
import com.societybook.dao.UserRepository;
import com.societybook.entities.Auth;
import com.societybook.entities.User;
import com.societybook.helper.Helper;

@Service
public class LoginService {

	@Autowired
	private AuthRepository authRepository;

	@Autowired
	private UserRepository userRepository;

	public Optional<User> authenticate(Auth auth) throws NoSuchAlgorithmException {
		Helper h = new Helper();
		auth.setPassword(h.toHexString(h.getSHA(auth.getPassword())));
		List<Auth> creds = authRepository.findAll();
		Auth finalAuth = null;
		for (Auth ele : creds) {
			if (ele.getUsername().equals(auth.getUsername()) && ele.getPassword().equals(auth.getPassword()) && ele.getisAdmin() == auth.getisAdmin()) {
				
				finalAuth = ele;
			}
		}
		if (finalAuth == null) {
			return null;
		}else {
			return userRepository.findById(finalAuth.getUserId());
		}
	}
}
