import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Invalid token" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};
