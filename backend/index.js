import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import AccelerometerData from "./models/accelerometer.model.js";
import connectDB from "./db/dbConnect.js";
import User from "./models/user.model.js";
import 'dotenv/config';
import cors from 'cors';
import routes from "./routes/app.route.js";
const app = express();
// const url=process.env.MONGO_URI;
const PORT=process.env.PORT
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',  // Allow only your frontend URL
  methods: 'GET,POST',             // Allow only specific HTTP methods
}));
//yahan kotlin se data accept krenge
app.use('/api/',routes);


connectDB().then(()=>app.listen(PORT,()=>{
  console.log('server started at port:',PORT);
})).catch(error=>console.log(error));
// app.listen(PORT,()=>{
//   console.log('server started at port:',PORT);
// })
