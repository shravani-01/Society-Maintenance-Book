package com.societybook.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "members")
public class User {

	@Id
	private String id;
	private String username;
	private int flatNumber;
	private String name;
	private List<Transaction> records;
	private boolean isAdmin;
	private List<Transaction> due;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getFlatNumber() {
		return flatNumber;
	}

	public void setFlatNumber(int flatNumber) {
		this.flatNumber = flatNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Transaction> getRecords() {
		return records;
	}

	public void setRecords(List<Transaction> records) {
		this.records = records;
	}

	public boolean getisAdmin() {
		return isAdmin;
	}

	public void setisAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public List<Transaction> getDue() {
		return due;
	}

	public void setDue(List<Transaction> due) {
		this.due = due;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String id, String username, int flatNumber, String name, List<Transaction> records, boolean isAdmin,
			List<Transaction> due) {
		super();
		this.id = id;
		this.username = username;
		this.flatNumber = flatNumber;
		this.name = name;
		this.records = records;
		this.isAdmin = isAdmin;
		this.due = due;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", flatNumber=" + flatNumber + ", name=" + name
				+ ", records=" + records + ", isAdmin=" + isAdmin + ", due=" + due + "]";
	}

}