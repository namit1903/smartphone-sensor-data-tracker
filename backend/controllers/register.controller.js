import User from "../models/user.model.js";
const registerUser=async (req, res) => {
  const { username, userId, deviceId } = req.body;

  try {
    // Check if the user already exists (by username, userId, or deviceId)
    const existingUser = await User.findOne({
      $or: [{ username }, { userId }, { deviceId }]
    });

    if (existingUser) {
      return res.status(409).send('User already exists'); // User already registered
    }

    // Create a new user entry in MongoDB
    const newUser = new User({
      username,
      userId,
      deviceId
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error("Error occurred while registering user:", error);
    res.status(500).send('Error registering user');
  }
}
export default registerUser;