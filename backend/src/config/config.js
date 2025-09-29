import "dotenv/config";
import ConnectMongoDBSession from "connect-mongodb-session";
import fastifySession from "@fastify/session";
import { Admin } from "../models/user.js";

export const PORT = process.env.PORT || 5000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;

const MongoDBStore = ConnectMongoDBSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

sessionStore.on("error", (error) => {
  console.log("session store error", error);
});

export const authenticate = async (email, password) => {
  // creating admin first time
  //   if (email && password) {
  //     if (email === "anmol@gmail.com" && password === "12345678") {
  //       return Promise.resolve({ email, password });
  //     } else {
  //       return null;
  //     }
  //   }

  // uncomment when created manually
  if (email && password) {
    const user = await Admin.findOne({ email });
    if (!user) {
      return null;
    }
    if (user.password === password) {
      return Promise.resolve({ email, password });
    } else {
      return null;
    }
  }
};
