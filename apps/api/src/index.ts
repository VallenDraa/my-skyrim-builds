import { logger } from "@repo/logger";
import { createServer } from "./v1/server";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
