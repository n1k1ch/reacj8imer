package com.n1k1ch.reacj8imer.rest;

import com.n1k1ch.reacj8imer.db.entity.User;
import com.n1k1ch.reacj8imer.db.service.UserService;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

/**
 * Created by ncherevkov on 11/11/2015.
 */
@Path("/users")
public class UserController {

	@Inject
	private UserService userService;

	@Path("/all")
	@GET
	@Produces("application/json")
	public Response getAll() {
		JsonArrayBuilder builder = Json.createArrayBuilder();

		for(User user : userService.getAll()) {
			builder.add(
					Json.createObjectBuilder()
							.add("name", user.getName())
							.add("password", user.getPassword())
			);
		}

		return Response
				.status(200)
				.header("Access-Control-Allow-Origin","http://localhost:63342")
				.entity(builder.build())
				.build();
	}
}
