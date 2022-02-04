package com.societybook.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.societybook.entities.User;

public interface UserRepository extends MongoRepository<User, String> {
	
}
