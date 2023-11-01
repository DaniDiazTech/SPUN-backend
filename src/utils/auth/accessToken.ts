import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config()

export default function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}
