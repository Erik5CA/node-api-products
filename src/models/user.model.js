import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password, receivedPasswors) => {
  return await bcrypt.compare(password, receivedPasswors);
};

export default mongoose.model("User", UserSchema);
