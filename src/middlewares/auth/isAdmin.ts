import dotenv from "dotenv";

import User from "../../models/users/user";
import { verifyService } from "../../services/auth/verify.service";

dotenv.config();

export const isAdmin = async (req, res, next) => {
  const data = await verifyService(req.cookies.token);
  const user = await User.findById(data.id);

  if (user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "You don't have access to this route" });
  }
};
