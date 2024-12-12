import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log({ token });
    if (!token) return res.status(403).json({ message: "No token provided" });

    const decoded = jwt.verify(token, config.SECRET);
    const { id } = decoded;
    req.userId = id;
    const user = await User.findById(id, { password: 0 });
    if (!user) return res.status(404).json({ message: "User not found" });

    console.log(user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
