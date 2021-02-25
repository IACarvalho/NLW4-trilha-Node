import request from "supertest";
import { app } from "../app";

import CreateConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connetion = await CreateConnection();
    await connetion.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(201);
  });

  it("Should not be able to create a user with exists email", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(400);
  });
});