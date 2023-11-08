import type { FastifyPluginCallback } from "fastify";
import fastifyWebSocket from "@fastify/websocket";
import WebSocket from "ws";

function send(socket: WebSocket) {
  socket.send(
    JSON.stringify({
      cpu: process.cpuUsage(),
      memory: process.memoryUsage(),
    }),
  );
}

const plugin: FastifyPluginCallback = (fastify, opts, next) => {
  fastify.register(fastifyWebSocket);
  fastify.register(async (fastify) => {
    fastify.get("/ws", { websocket: true }, (connection) => {
      // console.log('Client connected');

      send(connection.socket);

      const timer = setInterval(function () {
        send(connection.socket);
      }, 1000);

      connection.socket.on("close", () => {
        // console.log('Client disconnected');
        clearInterval(timer);
      });
    });
  });

  next();
};

export default plugin;
