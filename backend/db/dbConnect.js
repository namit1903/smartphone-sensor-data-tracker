import mongoose from "mongoose";
import 'dotenv/config';
import { configDotenv } from "dotenv";
const url=process.env.MONGO_URL;
console.log(url)
const connectDB=async()=>{
  try{
await mongoose.connect(url);
console.log("Successfully connected to MongoDB");
  }catch(e){
    console.error("Error in DB connection:",e);
  }

}
export default connectDB;