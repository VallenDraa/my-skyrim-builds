import express, { json, urlencoded, type Express } from "express";
import cors from "cors";
import { env } from "./config/env";

export const createServer = (): Express => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors({ origin: env.CLIENT_ORIGIN }))
    .get("/ping", (_, res) => res.json({ message: "pong" }));

  return app;
};
