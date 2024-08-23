import { createServer } from "./server";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  // eslint-disable-next-line no-console -- ok
  console.log(`api running on ${port}`);
});
