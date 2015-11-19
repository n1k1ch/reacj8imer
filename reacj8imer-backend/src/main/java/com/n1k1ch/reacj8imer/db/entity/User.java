package com.n1k1ch.reacj8imer.db.entity;

/**
 * Created by ncherevkov on 11/11/2015.
 */
public class User {
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String password;

	public User() {
	}

	public User(String name, String password) {
		this.name = name;
		this.password = password;
	}

	public static User create(String name, String password) {
		return new User(name, password);
	}
}
