package com.societybook.entities;

import org.springframework.data.annotation.Id;

public class Transaction {
	@Id
	private int id;
	private String month;
	private int year;
	private float amount;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public Transaction(int id, String month, int year, float amount) {
		super();
		this.id = id;
		this.month = month;
		this.year = year;
		this.amount = amount;
	}
	
	

	@Override
	public String toString() {
		return "Transaction [id=" + id + ", month=" + month + ", year=" + year + ", amount=" + amount + "]";
	}

	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}

}
