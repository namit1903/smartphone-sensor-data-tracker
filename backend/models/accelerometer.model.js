import mongoose from "mongoose";
// import User from "./user.model.js"
//define the schema here
const accelerometerSchema = new mongoose.Schema({
  // id: { type: String, required: true },
  userDbId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  z: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
},{timestamps:true});
const AccelerometerData=mongoose.model("AccelerometerData",accelerometerSchema)
export default AccelerometerData;