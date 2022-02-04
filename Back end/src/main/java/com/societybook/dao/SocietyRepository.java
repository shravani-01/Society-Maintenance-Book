package com.societybook.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.societybook.entities.Society;

public interface SocietyRepository extends MongoRepository<Society, Integer>{

}
