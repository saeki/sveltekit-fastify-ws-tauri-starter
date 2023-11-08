import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import type { FastifyPluginCallback } from "fastify";
import fastifyStatic from "@fastify/static";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

const plugin: FastifyPluginCallback = (fastify, opts, next) => {
  const root = join(__dirname, "public");
  if (existsSync(root)) {
    fastify.register(fastifyStatic, { root });
  }

  next();
};

export default plugin;
