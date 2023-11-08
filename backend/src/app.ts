import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import fastify from "fastify";
import autoLoad from "@fastify/autoload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = fastify({
  logger: true,
});

app.register(autoLoad, {
  dir: join(__dirname, "plugins"),
  forceESM: true,
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
