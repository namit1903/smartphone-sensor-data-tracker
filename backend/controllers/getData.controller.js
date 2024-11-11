import AccelerometerData from "../models/accelerometer.model.js";
import User from "../models/user.model.js";

const getData = async (req, res) => {
  const { username } = req.query; 
  // const { username, userId, deviceId } = req.query; 
  // console.log("user")

  try {
   
    let query = {};
    
    if (username) {
      console.log("user")
      const user = await User.findOne({ username }); // Find user by username
      // console.log("data of user",user);
      if (!user) {
        return res.status(404).send('User not found');
      }
      query.userDbId = user._id; // Use userId from User collection
    } /*
    else if (userId) {
      query.userDbId = userId; // If userId is provided directly
    } else if (deviceId) {
      const user = await User.findOne({ deviceId }); // Find user by deviceId
      if (!user) {
        return res.status(404).send('User not found');
      }
      query.userDbId = user._id;
    }
*/
    // Query the AccelerometerData collection based on the query filters
    const data = await AccelerometerData.find(query); // Use the filter query

    if (data.length === 0) {
      return res.status(404).send('No data found');
    }

    // Send the retrieved data as the response
    res.status(200).json({
      user: {
        username: User.username,
        email: User.email,
        deviceId: User.deviceId,
        userId: User.userId
      },
      data
    });

  } catch (error) {
    console.error("Error occurred while retrieving data:", error);
    res.status(500).send('Failed to retrieve data');
  }
};

export default getData;
