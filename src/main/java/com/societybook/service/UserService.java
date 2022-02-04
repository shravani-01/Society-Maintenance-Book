package com.societybook.service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.societybook.dao.UserRepository;
import com.societybook.entities.Transaction;
import com.societybook.entities.User;
import com.societybook.helper.Helper;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public Optional<User> getUserById(String id) {
		try {
			Optional<User> user = userRepository.findById(id);
			return user;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			Optional<User> user = null;
			return user;
		}
	}
	
	public List<String> getYearlyRecords(String id){
		try {			
			HashMap<Integer, Float> hashMap = new HashMap<Integer, Float>();
			List<Transaction> records = userRepository.findById(id).get().getRecords();
			Helper h = new Helper();
			List<String> hashMap1 = h.userYearly(hashMap, records);
			return hashMap1;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			List<String> l1 = null;
			return l1;
		}
	}
}
