import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDb Connected succesfully..!");
  } catch (error) {
    console.log("MongoDB Connection ERROR : ", error);
    process.exit(1);
  }
};

export default connectDB;
