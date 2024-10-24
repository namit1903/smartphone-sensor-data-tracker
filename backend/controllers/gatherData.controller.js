import User from "../models/user.model.js";
const gatherData= async (req, res) => {
  const { username, userId, deviceId, x, y, z } = req.body;
  // const { x, y, z } = req.body;
  console.log("accelerometer values",x, y, z);



  try {
      // Apply authentication if needed here
    const user = await User.findOne({
      $or: [{ username }, { userId }, { deviceId }]
    });

    if (!user) {
      return res.status(404).send('User not found');
    }
    // Assuming AccelerometerData schema has userId field
    const newData = new AccelerometerData({ x, y, z });
    await newData.save();

    res.status(201).send('Data saved successfully');
  } catch (error) {
    console.error("Error occurred while saving data:", error);
    res.status(500).send('Failed to save data');
  }
};
export default gatherData;

