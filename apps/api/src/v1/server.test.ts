import request from "supertest";
import { it, describe, expect } from "vitest";
import { createServer } from "./server";
import { env } from "./config/env";

describe("createServer()", () => {
  it("Should return an instance of Express app", () => {
    const app = createServer();

    expect(app).toBeDefined();

    // Ensure app has the 'listen' method, indicating it's an Express app
    expect(app).toHaveProperty("listen");
    expect(typeof app.listen).toStrictEqual("function");
  });

  it("Should not have x-powered-by header", () => {
    const app = createServer();

    expect(app.get("x-powered-by")).toStrictEqual(false);
  });

  it("Should return `access-control-allow-origin` header correctly", async () => {
    const app = createServer();
    const response = await request(app).options("/ping");

    expect(response.headers["access-control-allow-origin"]).toStrictEqual(
      env.CLIENT_ORIGIN,
    );
  });
});
