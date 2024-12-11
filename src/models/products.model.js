import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    prince: Number,
    imageUrl: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", ProductSchema);
