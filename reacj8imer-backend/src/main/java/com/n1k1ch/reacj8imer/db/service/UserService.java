package com.n1k1ch.reacj8imer.db.service;

import com.n1k1ch.reacj8imer.db.entity.User;

import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by ncherevkov on 11/11/2015.
 */
@Stateless
public class UserService {
	public List<User> getAll() {

		Supplier<User> userSupplier = () -> {
			User user = new User();
			user.setName((ThreadLocalRandom.current().nextInt() % 2 == 0 ? "Mr. " : "Mrs. ") + ThreadLocalRandom.current().nextGaussian());
			user.setPassword("123456" + ThreadLocalRandom.current().nextGaussian());
			return user;
		};

		return Arrays.stream(Stream.generate(userSupplier).limit(5).toArray(User[]::new)).collect(Collectors.toList());
	}
}
