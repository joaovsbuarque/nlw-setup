import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRouter } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRouter);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running");
  });
