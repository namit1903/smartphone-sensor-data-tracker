import AccelerometerData from "../models/accelerometer.model.js";
import User from "../models/user.model.js";
// import A
const gatherData=async (req, res) => {
  const { username, userId, deviceId, x, y, z } = req.body;
  // const { x, y, z } = req.body;
  console.log(x, y, z);

  try {
      // Apply authentication if needed here
    const user = await User.findOne({
      $or: [{ username }, { userId }, { deviceId }]
    });

    if (!user) {
      return res.status(404).send('User not found');
    }
    const usercollectionId=user._id;
    console.log("user databse collection Id:",usercollectionId);
    // Assuming AccelerometerData schema has userId field
    const newData = new AccelerometerData({userDbId:usercollectionId, x, y, z });
    await newData.save();

    res.status(201).send('Data saved successfully');
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    res.status(500).send('Failed to save data');
  }
};
export default gatherData;

