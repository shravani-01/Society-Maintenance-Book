package com.societybook.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.societybook.entities.Auth;

public interface AuthRepository extends MongoRepository<Auth, String> {

}
