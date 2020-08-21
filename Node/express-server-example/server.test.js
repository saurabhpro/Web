import request from "supertest";
import { app, API_V1_DISK } from "./dist/server.js";

let server;

beforeAll(async (done) => {
  server = app.listen(4000, () => {
    global.agent = request.agent(server);
    done();
  });
});

afterAll(async () => {
  await server.close();
});

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await server.post(API_V1_DISK).send({
      data: "this is soo cool",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
