import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import User from "../../models/users/user";

dotenv.config();

export const verify = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN, async (err, user) => {
      if (err) {
        res.status(401).json({ message: "No token, authorization denied" });
      } else {
        const userFound = await User.findById(user.id);

        if (userFound) {
          res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
          });
        } else {
          res.status(401).json({ message: "No token, authorization denied" });
        }
      }
    });
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};
