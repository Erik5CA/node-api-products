import mongoose from "mongoose";

export const conncectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/productsdb");
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
