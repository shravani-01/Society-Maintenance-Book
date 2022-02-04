package com.societybook.helper;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.societybook.entities.Society;
import com.societybook.entities.Transaction;

public class Helper {
	public List<String> userYearly(HashMap<Integer, Float> hashMap, List<Transaction> records) {
		for (Transaction transaction : records) {
			if (!hashMap.containsKey(transaction.getYear())) {
				hashMap.put(transaction.getYear(), transaction.getAmount());
			} else {
				float amount = (float) hashMap.get(transaction.getYear());
				amount += transaction.getAmount();
				hashMap.put(transaction.getYear(), amount);
			}
		}
		return yearly(hashMap);
//		return hashMap;
	}

	@SuppressWarnings("null")
	public HashMap<String, List<String>> societyYearly(HashMap<String, List<String>> hashMap1,
			Society society) {
		HashMap<Integer, Float> hashMap2 = new HashMap<Integer, Float>();
		HashMap<Integer, Float> hashMap3 = new HashMap<Integer, Float>();
		HashMap<Integer, Float> hashMap4 = new HashMap<Integer, Float>();
		HashMap<Integer, Float> hashMap5 = new HashMap<Integer, Float>();
		List<Transaction> garbage = society.getGarbage();
		List<Transaction> electricity = society.getElectricity();
		List<Transaction> water = society.getWater();
		List<Transaction> others = society.getOthers();

		for (Transaction transaction : garbage) {
			if(hashMap2 == null) {
				hashMap2.put(transaction.getYear(), transaction.getAmount());
			}
			else if (!hashMap2.containsKey(transaction.getYear()) || hashMap2 == null) {
				hashMap2.put(transaction.getYear(), transaction.getAmount());
			} else {
				float amount = (float) hashMap2.get(transaction.getYear());
				amount += transaction.getAmount();
				hashMap2.put(transaction.getYear(), amount);
			}			
		}
		
		
		for (Transaction transaction : electricity) {
			if(hashMap3 == null) {
				hashMap3.put(transaction.getYear(), transaction.getAmount());
			}
			else if (!hashMap3.containsKey(transaction.getYear()) || hashMap3 == null) {
				hashMap3.put(transaction.getYear(), transaction.getAmount());
			} else {
				float amount = (float) hashMap3.get(transaction.getYear());
				amount += transaction.getAmount();
				hashMap3.put(transaction.getYear(), amount);
			}
		}
		for (Transaction transaction : water) {
			if(hashMap4 == null) {
				hashMap4.put(transaction.getYear(), transaction.getAmount());
			}
			else if (!hashMap4.containsKey(transaction.getYear()) || hashMap4 == null) {
				hashMap4.put(transaction.getYear(), transaction.getAmount());
			} else {
				float amount = (float) hashMap4.get(transaction.getYear());
				amount += transaction.getAmount();
				hashMap4.put(transaction.getYear(), amount);
			}
		}
		for (Transaction transaction : others) {
			if(hashMap5 == null) {
				hashMap5.put(transaction.getYear(), transaction.getAmount());
			}
			else if (!hashMap5.containsKey(transaction.getYear()) || hashMap5 == null) {
				hashMap5.put(transaction.getYear(), transaction.getAmount());
			} else {
				float amount = (float) hashMap5.get(transaction.getYear());
				amount += transaction.getAmount();
				hashMap5.put(transaction.getYear(), amount);
			}
		}
		List<String> garbageList = yearly(hashMap2);
		List<String> elecList = yearly(hashMap3);
		List<String> waterList = yearly(hashMap4);
		List<String> othersList = yearly(hashMap5);
		hashMap1.put("Garbage", garbageList);
		hashMap1.put("Electricity", elecList);
		hashMap1.put("Water", waterList);
		hashMap1.put("Others", othersList);

		return hashMap1;
	}
	
	public byte[] getSHA(String input) throws NoSuchAlgorithmException{ 
        MessageDigest md = MessageDigest.getInstance("SHA-256"); 
        return md.digest(input.getBytes(StandardCharsets.UTF_8)); 
    }
    
    public String toHexString(byte[] hash)
    { 
        BigInteger number = new BigInteger(1, hash);
        StringBuilder hexString = new StringBuilder(number.toString(16));
        while (hexString.length() < 32) { 
            hexString.insert(0, '0'); 
        } 
  
        return hexString.toString(); 
    }
    
    public List<String> yearly(HashMap<Integer, Float> hash) {
    	List<String> keyList = new ArrayList<String>();
		List<String> valueList = new ArrayList<String>();
		for (int key : hash.keySet()) {
			keyList.add(String.valueOf(key));
		}
		for (Float val : hash.values()) {
			valueList.add(String.valueOf(val));
		}
		List<String> myList = new ArrayList<>();
		for(int i=0;i<keyList.size();i++) {
			myList.add(keyList.get(i)+":"+valueList.get(i));
		}
		return myList;
    }
}
