import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/user.model.js";
import Role from "../models/role.model.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email }).populate("roles");
  if (!userFound)
    return res.status(400).json({ message: "Invalid credentials" });

  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );
  if (!matchPassword)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token });
};

export const signUp = async (req, res) => {
  const { username, password, email, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = role._id;
  }

  const saveUser = await newUser.save();

  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.json({ token });
};
