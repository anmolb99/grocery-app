import "dotenv/config";
import { connectDb } from "./src/config/connect.js";
import fastify from "fastify";
import { PORT } from "./src/config/config.js";

const start = async () => {
  await connectDb(process.env.MONGO_URI);

  const app = fastify();
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`server is running on port ${PORT}`);
    }
  });
};

start();
