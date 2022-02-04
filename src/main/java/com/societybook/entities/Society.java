package com.societybook.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "society")
public class Society {
	
	@Id
	private int id;
	private List<Transaction> garbage;
	private List<Transaction> electricity;
	private List<Transaction> water;
	private List<Transaction> others;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Transaction> getGarbage() {
		return garbage;
	}

	public void setGarbage(List<Transaction> garbage) {
		this.garbage = garbage;
	}

	public List<Transaction> getElectricity() {
		return electricity;
	}

	public void setElectricity(List<Transaction> electricity) {
		this.electricity = electricity;
	}

	public List<Transaction> getWater() {
		return water;
	}

	public void setWater(List<Transaction> water) {
		this.water = water;
	}

	public List<Transaction> getOthers() {
		return others;
	}

	public void setOthers(List<Transaction> others) {
		this.others = others;
	}

	public Society(int id, List<Transaction> garbage, List<Transaction> electricity, List<Transaction> water,
			List<Transaction> others) {
		super();
		this.id = id;
		this.garbage = garbage;
		this.electricity = electricity;
		this.water = water;
		this.others = others;
	}

	public Society() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Society [id=" + id + ", garbage=" + garbage + ", electricity=" + electricity + ", water=" + water
				+ ", others=" + others + "]";
	}

}
