import dotenv from "dotenv";
import connectDB from "./db/config.js";

dotenv.config({ path: "./.env" });

connectDB();












// here we're using IIFE js function

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Database connected Succesfully..!");
  } catch (error) {
    console.log("Error : ", error);
    throw error;
  }
})();
*/
