import dotenv from "dotenv";

import User from "../../models/users/user";

dotenv.config();

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "You don't have access to this route" });
  }
};
