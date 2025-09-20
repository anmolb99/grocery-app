import mongoose from "mongoose";

export const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection error", error);
  }
};
