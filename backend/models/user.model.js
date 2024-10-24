import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    deviceId: {
      type: String,
      required: true,
      unique: true,
    },
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
