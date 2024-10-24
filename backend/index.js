import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import AccelerometerData from "./models/accelerometer.model.js";
import connectDB from "./db/dbConnect.js";
import User from "./models/user.model.js";
import 'dotenv/config';
import routes from "./routes/app.route.js";
const app = express();
// const url=process.env.MONGO_URI;
const PORT=process.env.PORT
app.use(bodyParser.json());

//yahan kotlin se data accept krenge
app.post('/api/',routes);
// app.post('/api/accelerometer-data', async (req, res) => {
// app.post('/api/accelerometer-data', async (req, res) => {
//   const { username, userId, deviceId, x, y, z } = req.body;
//   // const { x, y, z } = req.body;
//   console.log(x, y, z);



//   try {
//       // Apply authentication if needed here
//     const user = await User.findOne({
//       $or: [{ username }, { userId }, { deviceId }]
//     });

//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     const usercollectionId=user._id;
//     console.log("user databse collection Id:",usercollectionId);
//     // Assuming AccelerometerData schema has userId field
//     const newData = new AccelerometerData({userDbId:usercollectionId, x, y, z });
//     await newData.save();

//     res.status(201).send('Data saved successfully');
//   } catch (error) {
//     console.error("Error occurred while saving data:", error);
//     res.status(500).send('Failed to save data');
//   }
// });

app.post('/api/register-user', async (req, res) => {
  const { email,username, userId, deviceId } = req.body;

  try {
    // Check if the user already exists (by username, userId, or deviceId)
    const existingUser = await User.findOne({
      $or: [{ username }, { userId }, { deviceId },{email}]
    });

    if (existingUser) {
      return res.status(409).send('User already exists'); // User already registered
    }

    // Create a new user entry in MongoDB
    const newUser = new User({
      username,
      userId,
      deviceId,email
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error("Error occurred while registering user:", error);
    res.status(500).send('Error registering user');
  }
});





connectDB().then(()=>app.listen(PORT,()=>{
  console.log('server started at port:',PORT);
})).catch(error=>console.log(error));
// app.listen(PORT,()=>{
//   console.log('server started at port:',PORT);
// })
