package com.societybook.service;

import java.security.NoSuchAlgorithmException;
import java.time.Month;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.societybook.dao.AuthRepository;
import com.societybook.dao.SocietyRepository;
import com.societybook.dao.UserRepository;
import com.societybook.entities.Auth;
import com.societybook.entities.Society;
import com.societybook.entities.Transaction;
import com.societybook.entities.User;
import com.societybook.helper.Helper;

@Service
public class AdminService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthRepository authRepository;
	
	@Autowired
	private SocietyRepository societyRepository;
	
//	Method to get all the members/users
	public Collection<User> getAllUsers(){
		return userRepository.findAll();
	}
	
//	Method to get the list of defaulters
	public List<User> defaulters(){
		List<User> list = userRepository.findAll();
		List<User> defaulterUsersList = new ArrayList<>();
		for (User u : list) {
			if (u.getDue().size() > 0) {
				defaulterUsersList.add(u);
			}
		}
		return defaulterUsersList;
	}

//	Method to add maintenance/record paid by a specific user
	public User addRecord(String id, Transaction txn) {
		Optional<User> user = userRepository.findById(id);
		List<Transaction> records = user.get().getRecords();
		List<Transaction> due = user.get().getDue();
		String n = Integer.toString(Month.valueOf(txn.getMonth().toUpperCase()).getValue());
		if(n.length()==1) {
			n='0'+n;
		}
		if (txn.getAmount() < 1000.0) {
//			gid -> integer id generated based on year and month
			int gid = Integer.parseInt(Integer.toString(txn.getYear()) + n);
//			tx -> Amount paid by the member/user
			Transaction tx = new Transaction(gid, txn.getMonth(), txn.getYear(), txn.getAmount());
//			tx1 -> Due calculated based on the amount paid by member
			Transaction tx1 = new Transaction(gid, txn.getMonth(), txn.getYear(), 1000 - txn.getAmount());
			records.add(tx);
			due.add(tx1);
			user.get().setRecords(records);
			user.get().setDue(due);
			System.out.println(user);
		} else {
//			gid -> integer id generated based on year and month 
			int gid = Integer.parseInt(Integer.toString(txn.getYear()) + n);
			Transaction tx = new Transaction(gid, txn.getMonth(), txn.getYear(), txn.getAmount());
			records.add(tx);
			user.get().setRecords(records);
			System.out.println(user);
		}
		userRepository.save(user.get());
		return user.get();
	}
	
//	Method to delete individual due for a member/user.
	public User deleteDue(String id, Transaction txn) {
		Optional<User> user = userRepository.findById(id);
		List<Transaction> records = user.get().getRecords();
		List<Transaction> due = user.get().getDue();
		List<Transaction> dues = new ArrayList<>();
		for (Transaction transaction : records) {
			if (transaction.getId() == txn.getId()) {
				transaction.setAmount(1000);
			}
		}

		for (Transaction transaction : due) {
			if (txn.getId() != transaction.getId()) {
				dues.add(transaction);
			}
		}
		user.get().setRecords(records);
		user.get().setDue(dues);
		userRepository.save(user.get());
		return user.get();
	}
	
//	Method to update user/member
	public User updateUser(User user) {
		User member = userRepository.save(user);
		return member;
	}
	
//	Method to add user/member into the database
	public String addUser(User user) throws NoSuchAlgorithmException{
		Helper h = new Helper();
//		Create id for the user
		String uniqueId = UUID.randomUUID().toString();
//		Create credentials for the user
		Auth auth = new Auth(user.getUsername(),h.toHexString(h.getSHA("12345")),user.getisAdmin(),uniqueId);
		user.setId(uniqueId);
		try {
			authRepository.save(auth);
			userRepository.save(user);
			return "Success";
		}catch(Exception e) {
			return e.getMessage();
		}
	}
	
//	Method to delete a user by id
	public Collection<User> deleteUser(String id){
		userRepository.deleteById(id);
		return userRepository.findAll();
	}
	
//	Method to get the society information
	public Society getSocietyDetails() {
		return societyRepository.findAll().get(0);
	}
	
//	Method to set the society details
	public Society setSocietyDetails(Society society) {
		Society societyDetails = societyRepository.save(society);
		return societyDetails;
	}
	
//	Method to get the society yearly expenses
	public HashMap<String, List<String>> getYearlyDetails() {
		Society society = societyRepository.findAll().get(0);
		HashMap<String, List<String>> hashMap1 = new HashMap<String, List<String>>();
		Helper h = new Helper();
		hashMap1 = h.societyYearly(hashMap1, society);
		return hashMap1;
	}
}
