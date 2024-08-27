import * as z from "zod";

export const env = z
  .object({
    DATABASE_URL: z.string().url(),
    PORT: z.number().int(),
    CLIENT_ORIGIN: z.string().url(),
  })
  .parse({
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: parseInt(process.env.PORT || "3001"),
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  });
