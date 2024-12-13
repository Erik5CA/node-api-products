import Role from "../models/role.model.js";
import User from "../models/user.model.js";

export const checkRolesExisted = async (req, res, next) => {
  let roles = await Role.find();
  roles = roles.map((r) => r.name);
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!roles.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ message: `Role ${req.body.roles[i]} does not exist` });
      }
    }
  }
  next();
};

export const checkUserExist = async (req, res, next) => {
  const { username, email } = req.body;
  let user = await User.findOne({ username });
  if (user) return res.status(400).json("User already exists");
  user = await User.findOne({ email });
  if (user) return res.status(400).json("User already exists");
  next();
};
