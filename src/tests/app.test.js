import request from "supertest";
import app from "../app.js";

describe("testing node app", () => {
  test("express", async () => {
    const response = await request(app).get("/");

    expect(response.status).toEqual(200);
  });
});
