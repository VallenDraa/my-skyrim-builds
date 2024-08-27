import { logger } from "@repo/logger";
import { createServer } from "./v1/server";
import { env } from "./v1/config/env";

const port = env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
