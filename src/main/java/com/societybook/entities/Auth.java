package com.societybook.entities;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "auth")
public class Auth {
	private String username;
	private String password;
	private boolean isAdmin;
	private String userId;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean getisAdmin() {
		return isAdmin;
	}

	public void setisAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Auth(String username, String password, boolean isAdmin, String userId) {
		super();
		this.username = username;
		this.password = password;
		this.isAdmin = isAdmin;
		this.userId = userId;
	}

	public Auth() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Auth [username=" + username + ", password=" + password + ", isAdmin=" + isAdmin + ", userId=" + userId
				+ "]";
	}
	
}
