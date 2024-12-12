import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", RoleSchema);
